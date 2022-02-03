import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Card from './Card';


const SearchPage = () => {
    let [search, setSearch] = useState("");

    const searchChange = (e) => {
        setSearch(e.target.value);
    }

    const onSearch = (e) => {

    }
  return <div>
      <Nav/>
          <InputSearch type="text" placeholder='Search' value={search} onChange={searchChange}></InputSearch>
          <SearchButton type="submit" onClick={onSearch}><SearchIcon/></SearchButton>
          <Result>Result for: Search</Result>
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
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
          </Cards>
  </div>;
};

export default SearchPage;


const InputSearch = styled.input`
    position: absolute;
    top: 80px;
    left: 450px;
    padding: 0px 12px;
    height: 40px;
    width: 500px;
    font-size: 16px;
`;

const SearchButton = styled.input`
    position: absolute;
    top: 80px;
    left: 950px;
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

