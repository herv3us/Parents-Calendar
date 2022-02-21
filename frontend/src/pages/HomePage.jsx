import React, { useState } from 'react';
import LoginForm from '../components/main/LoginForm';
import SuggestEvent from '../components/main/SuggestEvent';

function HomePage() {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenSuggestion, setIsOpenSuggestion] = useState(false);

  return (
    <div>
      {isOpenLogin ? <LoginForm /> : null}
      <SuggestEvent />
    </div>
  );
}

export default HomePage;
