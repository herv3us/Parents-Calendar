import React, { useState } from 'react';
import LoginForm from '../components/main/LoginForm';
import SuggestEvent from '../components/main/SuggestEvent';
import SimpleCalendar from '../components/main/SimpleCalendar';
import e from 'cors';

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
      setButtonText('Close form');
    }
  };

  return (
    <div>
      {isOpenLogin ? <LoginForm /> : null}
      <button onClick={(e) => handleClick(e)}>{buttonText}</button>
      {isOpenSuggestion ? <SuggestEvent /> : <SimpleCalendar />}
    </div>
  );
}

export default HomePage;
