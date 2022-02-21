import React from 'react';
import logo from '../../img/cal.png';
import styled from 'styled-components';

function Header() {
  return (
    <Head>
      <Logo src={logo} alt="logo" />
      <h2>Event Calendar</h2>
    </Head>
  );
}

export default Header;

const Logo = styled.img`
  max-height: 60px;
`;

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.3rem 1rem;

  h2 {
    margin-left: 1rem;
  }
`;
