import Home from './Components/Home';
import SearchPage from './Components/SearchPage';
import styled from 'styled-components';

function App() {
  return (
    <Container className="App">
      <SearchPage/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #161616;
  height: 500vh;
  color: #f8f9fa;
  padding: 0px
  margin: 0px;
`;

