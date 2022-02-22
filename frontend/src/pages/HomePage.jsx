import React, { useState } from 'react';
import LoginForm from '../components/main/LoginForm';
import SuggestEvent from '../components/main/SuggestEvent';
import SimpleCalendar from '../components/main/SimpleCalendar';
import { COLORS } from '../styles/constants';
import styled from 'styled-components';

function HomePage() {
  const [buttonText, setButtonText] = useState('Suggest new event');
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSuggestion, setIsOpenSuggestion] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (isOpenSuggestion) {
      setIsOpenSuggestion(false);
      setButtonText('Suggest new event');
    } else if (!isOpenSuggestion) {
      setIsOpenSuggestion(true);
      setButtonText('Back to calendar');
    }
  };

  return (
    <StyledHome>
      {isOpenLogin ? <LoginForm /> : null}
      <Button onClick={(e) => handleClick(e)}>{buttonText}</Button>
      {isOpenSuggestion ? <SuggestEvent /> : <SimpleCalendar />}
    </StyledHome>
  );
}

export default HomePage;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${COLORS.considerd};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  width: fit-content;
  position: absolute;
  top: 0;
  right: 19px;
`;
