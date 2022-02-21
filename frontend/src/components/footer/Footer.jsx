import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <StyledFooter>2022 &copy; Sofia Hervéus </StyledFooter>;
}

export default Footer;

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
