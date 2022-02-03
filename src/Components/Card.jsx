import React from 'react';
import styled from 'styled-components';

const Card = ({ id }) => {
  return <Container>
      <Image>{id}</Image>
      <Num>Videos: 12</Num>
      <Categ>Category</Categ>
      <Title>Title</Title>
  </Container>;
};

export default Card;

const Container = styled.div`
    height: 300px;
    width: 200px;
`;

const Image = styled.div`
    background-color: #414141;
    height: 250px;
    width: 200px;
`;

const Num = styled.div`
    position: Relative;
    top: -21px;
    background: #14170bab;
`;

const Categ = styled.div`
    position: Relative;
    top: -272px;
    background: #14170bab;
`;

const Title = styled.div`
    font-size: 20px;
    position:relative;
    top: -35px;
`;