import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import styled from 'styled-components';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Wrapper className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;
