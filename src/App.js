import Home from './Components/Home';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import styled from 'styled-components';
import ViewingPage from './Components/ViewingPage';

function App() {
  return (
    <Container className="App">
      <Router>
        <Route path="/" exact component={Home}/>
        <Route path="/search" exact component={SearchPage}/>
        <Route path="/view" exact component={ViewingPage}/>
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

