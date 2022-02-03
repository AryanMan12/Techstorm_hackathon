import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';


const SearchPage = ({state}) => {
    let [search, setSearch] = useState(state);

    const searchChange = (e) => {
        setSearch(e.target.value);
    }

    const onSearch = (e) => {

    }
  return <div>
      <Nav/>
          <SearchContainer>
            <InputSearch type="text" placeholder='Search' value={search} onChange={searchChange}></InputSearch>
            <SearchButton  onClick={onSearch}><SearchIcon/></SearchButton>
          </SearchContainer>
          <Result>Result for: {state}</Result>
          <Cards>
              <Card/>
          </Cards>
  </div>;
};

export default SearchPage;


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

const Result = styled.div`
    padding: 60px;
    font-size: 32px;
    font-weight: 600;
`;

const Cards = styled.div`
    padding:  0px 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap:20px;
`;

