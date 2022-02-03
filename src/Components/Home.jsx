import React from 'react';
import {Link} from 'react-router-dom';
import { useState , useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Nav from './Nav';
import db from './firebase';
import { getDocs,collection } from 'firebase/firestore';

const Home = () => {
    let [search, setSearch] = useState("");
    let [plays, setPlay] = useState([]);
    useEffect(() => {
        let list = [];
        getDocs(collection(db,'Academics')).then((value)=>value.forEach((el)=>{
            el.data().playlists.forEach((val)=>{
                list = list.concat(val);
            });
            console.log(list);
        })).finally(()=>{
            setPlay(list);
        });
        //console.log(temp);
    }, [])
    const searchChange = (e) => {
        setSearch(e.target.value);
    }

  return <div>
      <Nav/>
      <BannerSearch className='Banner'>
          <Banner>Banner Image</Banner>
          <SearchContainer>
          <InputSearch type="text" placeholder='Search' value={search} onChange={searchChange}></InputSearch>
          <Link to={{ 
                pathname: "/search", 
                state: search 
                }}>
            <SearchButton>
                <SearchIcon/>
            </SearchButton>
            </Link>
          </SearchContainer>

      </BannerSearch>
      <Main>
          <CategoryName>Top Playlists</CategoryName>
          <Cards>
              {plays.map((el)=>{
                  return (<Card key={el} id={el[0]}/>);
              })}
          </Cards>
      </Main>
  </div>;
};

export default Home;

const BannerSearch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Banner = styled.div`
    height: 180px;
    width: 1400px;
    text-align: center;
    background-color: #2c2c2c;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 70px;
`;

const CategoryName = styled.div`
    font-weight: bold;
    align-self: flex-start;
    font-size: 32px;
    padding: 20px;
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap:15px;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const InputSearch = styled.input`
    padding: 0px 12px;
    height: 40px;
    width: 500px;
    font-size: 16px;
    border-right: none;
`;

const SearchButton = styled.button`
    height: 44px;
    width: 44px;
    float: left;
    padding: 10px;
    color: #2c2c2c;
    background-color: #ffffff;
    font-size: 17px;
    border: none; 
    cursor: pointer;
`;
