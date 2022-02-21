import React, { useState } from 'react';
import { login } from '../../services/authService';
import { COLORS } from '../../styles/constants';
import styled from 'styled-components';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username && !password) {
      setErrorMessage('Fill in your credentials');
    } else if (!username) {
      setErrorMessage('Please fill in your username');
    } else if (!password) {
      setErrorMessage('Please fill in your password');
    }

    const data = await login(username, password);

    if (!data) {
      console.log('Nope, sorry');
      console.log(data);
    } else {
      console.log('Ja, detta är datan, ', data);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Heading>Login</Heading>
        <InputWrapper>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button type="submit" value="Login" />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Form>
    </div>
  );
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  border: 1px solid ${COLORS.mediumgrey};
  border-radius: 1rem;
  padding: 2rem;

  @media (max-width: 700px) {
    width: 300px;
  }
`;

const Heading = styled.h1`
  width: fit-content;
  margin: 0 auto;
  background-color: ${COLORS.backgroundForm};
  margin-top: -3.5rem;
  padding: 0 0.5rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;

  & label {
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    width: 90%;
    margin: 0 auto;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    outline: none;
    font: inherit;

    &:focus {
      outline: 2px dotted #5b5b5b;
      outline-offset: 4px;
    }
  }
`;

const Button = styled.input`
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;

  &:hover {
    background-color: #a7a7a7;
  }

  &:focus {
    outline: 2px dotted #5b5b5b;
    outline-offset: 4px;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 1rem;
  margin-bottom: 0;
`;
