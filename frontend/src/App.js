import Header from './components/header/Header';
import LoginForm from './components/main/LoginForm';
import styled from 'styled-components';
import Footer from './components/footer/Footer';

function App() {
  return (
    <StyledApp className="App">
      <Header />
      <LoginForm />
      <Footer />
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
`;
