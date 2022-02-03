import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return <Container>
      <NavBar className='NAV'>
          <Logo>Logo</Logo>
          <Options>
              <Option>CATEGORY</Option>
              <Option>NEWEST</Option>
              <Option>UPDATED</Option>
              <Option>TYPES</Option>
          </Options>
      </NavBar>
  </Container>
};

export default Nav;

const Container = styled.div`
    padding: 0px;
    margin: 0px;
    background-color: #161616;
    color: #f8f9fa;
    height: 100px
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 80px 25px 60px;

`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 32px;
    color:#f70000;
`;

const Options = styled.div`
    display: flex;
    gap:40px;
`;

const Option = styled.div`
    font-size: 24;
`;