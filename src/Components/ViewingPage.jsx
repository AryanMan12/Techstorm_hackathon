import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import VideoCard from './VideoCard'

const ViewingPage = () => {
  return <div>
      <Nav/>
      <Container>
        <VideoContainer>
            <Name>Name</Name>
            <Video>Video</Video>
            <Desc>Description</Desc>
        </VideoContainer>
        <PlaylistVideos>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </PlaylistVideos>
      </Container>
  </div>;
};

export default ViewingPage;

const Container = styled.div`
    display:flex;
    padding: 0px 40px;
`;

const VideoContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 70%;
    padding: 0px 20px;
`;

const PlaylistVideos = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
`;

const Name = styled.div`
    font-size:24px;
`;

const Video = styled.div`
    margin: 20px 60px;
    background: grey;
    height: 500px;
    width: 890px;
`;

const Desc = styled.div`
    font-size: 18px;
`;
