import styled, { css } from 'styled-components';
import { COLORS } from './constants';

export const CalendarFrame = styled.div`
  width: 350px;
  border: 1px solid ${COLORS.lightgrey};
  border-radius: 3px;
  box-shadow: 2px 2px 2px ${COLORS.lightgrey};
  margin: 2rem auto;
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.backgroundForm};
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: ${COLORS.considerd};
  border: none;
  border-radius: 3px;
`;

export const Body = styled.div`
  background-color: ${COLORS.backgroundForm};
  border-top: 1px solid #ddd;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Day = styled.div`
  width: 14.2%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid ${COLORS.backgroundBG};
      border-radius: 5px;
    `}

  ${(props) =>
    props.isBooked &&
    css`
      background-color: ${COLORS.booked};
    `}
`;
