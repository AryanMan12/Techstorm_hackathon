import Home from './Components/Home';
import {Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import styled from 'styled-components';
import ViewingPage from './Components/ViewingPage';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/search" component={SearchPage}/>
          <Route path="/view/:id" exact component={ViewingPage} return={({id})=><ViewingPage id={id} />}/>
        </Routes>
      </Router>
    </Container>
    
  );
}

export default App;

const Container = styled.div`
  background-color: #161616;
  height: 500vh;
  color: #f8f9fa;
  padding: 0px;
  margin: 0px;
`;

