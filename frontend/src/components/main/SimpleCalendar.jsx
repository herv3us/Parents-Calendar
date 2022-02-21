import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { COLORS } from '../../styles/constants';

function SimpleCalendar() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setstartDay] = useState(getStartDayOfTheMonth(date));

  function getStartDayOfTheMonth(date) {
    const startDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDate();
    return startDate === 0 ? 7 : startDate;
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(year) ? DAYS_LEAP : DAYS;

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setstartDay(getStartDayOfTheMonth(date));
  }, [date]);

  return (
    <CalendarFrame>
      <Header>
        <Button onClick={() => setDate(new Date(year, month - 1, day))}>
          Prev
        </Button>
        <div>
          {MONTHS[month]} {year}
        </div>
        <Button onClick={() => setDate(new Date(year, month + 1, day))}>
          Next
        </Button>
      </Header>
      <Body>
        {DAYS_OF_THE_WEEK.map((day) => (
          <Day key={day}>
            <strong>{day}</strong>
          </Day>
        ))}
        {Array(days[month] + (startDay - 1))
          .fill(null)
          .map((_, index) => {
            const d = index - (startDay - 2);
            return (
              <Day key={index} isToday={d === today.getDate()}>
                {d > 0 ? d : ''}
              </Day>
            );
          })}
      </Body>
    </CalendarFrame>
  );
}

export default SimpleCalendar;

const CalendarFrame = styled.div`
  width: 350px;
  border: 1px solid ${COLORS.lightgrey};
  border-radius: 3px;
  box-shadow: 2px 2px 2px ${COLORS.lightgrey};
  margin: 2rem auto;
`;

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: ${COLORS.considerd};
  border: none;
  border-radius: 3px;
`;

const Body = styled.div`
  background-color: #fff;
  border-top: 1px solid #ddd;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Day = styled.div`
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
