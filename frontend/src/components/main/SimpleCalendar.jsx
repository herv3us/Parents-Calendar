import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../../services/eventService';
import {
  DAYS,
  DAYS_LEAP,
  DAYS_OF_THE_WEEK,
  MONTHS,
} from '../../utils/calendarData';
import {
  CalendarFrame,
  Header,
  Button,
  Body,
  Day,
} from '../../styles/SimpleCalendar.styles';

function SimpleCalendar() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfTheMonth(date));

  function getStartDayOfTheMonth(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
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
    setStartDay(getStartDayOfTheMonth(date));
  }, [date]);

  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const foundEvents = await getAllEvents();
    setEvents(foundEvents.events);
    console.log(events);
  };

  useEffect(() => {
    getEvents();
  }, []);

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
