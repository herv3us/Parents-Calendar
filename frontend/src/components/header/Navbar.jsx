import React from 'react';
import styled from 'styled-components';
import { MdPerson } from 'react-icons/md';
import { COLORS } from '../../styles/constants';

function Navbar() {
  return (
    <IconButton>
      <MdPerson size={25} />
    </IconButton>
  );
}

export default Navbar;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${COLORS.backgroundForm};
  position: absolute;
  top: 0;
  right: 10px;
  padding: 0.5rem;
  transition: all ease 0.3s;

  &:hover {
    color: ${COLORS.considerd};
  }
`;
