import React from 'react';
import styled from 'styled-components';

const VideoCard = () => {
  return <Container>
      <Image>Image</Image>
      <Details>
          <Name>Name</Name>
          <Duration>Duration</Duration>
          <EpNum>Ep Num 1</EpNum>
      </Details>
  </Container>;
};

export default VideoCard;

const Container = styled.div`
    display: flex;
    height: 120px;
    background: grey;
    width: 375px;
`;
const Image = styled.div`
    height: 120px;
    width: 30%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 10px;
    justify-content: space-around;
`;
const Name = styled.div`
    font-weight: 600;
    font-size: 18px;
`;
const Duration = styled.div`
    font-size: 16px;
`;
const EpNum = styled.div`
    font-weight: bold;
`;
