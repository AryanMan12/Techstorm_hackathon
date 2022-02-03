import React from 'react';
import styled from 'styled-components';
// import YouTubePlaylist from 'react-youtube-playlist';
import {Link} from 'react-router-dom';

const Card = () => {

    // const open = ()=>{
    //     history.push({
    //         pathname:"/view",
    //         state:""
    //     });
    // }
    console.log("card");

  return <Container>
      <Num>Videos: 12</Num>
      <Categ>Category</Categ>
      <Title>Title</Title>
  </Container>;
};

export default Card;

const Container = styled.div`
    height: 50vh;
    width: 50vw;
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