import React from 'react';
import { useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';

const Home = () => {
    let [search, setSearch] = useState("");

    const searchChange = (e) => {
        setSearch(e.target.value);
    }
  return <div>
      <BannerSearch className='Banner'>
          <Banner>Banner Image</Banner>
          <InputSearch type="text" placeholder='Search' value={search} onChange={searchChange}></InputSearch>
          <SearchButton type="submit" value={Search}></SearchButton>
      </BannerSearch>
      <Main>
          <CategoryName>Category Name</CategoryName>
          <Cards>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
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

const InputSearch = styled.input`
    position: absolute;
    top: 255px;
    padding: 0px 12px;
    height: 40px;
    width: 500px;
    font-size: 16px;
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

const SearchButton = styled.input`
    position: absolute;
    top: 255px;
    left: 980px;
    height: 44px;
    width: 44px;
    float: left;
    padding: 10px;
    color: #2c2c2c;
    background-color: #ffffffff;
    font-size: 17px;
    border: 1px solid grey;
    border-left: none; 
    cursor: pointer;
`;
