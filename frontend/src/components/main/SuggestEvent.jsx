import React, { useState } from 'react';
import { COLORS } from '../../styles/constants';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../../services/eventService';

function SuggestEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [startTime, setStartTime] = useState('12:00');
  const [endDate, setEndDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [endTime, setEndTime] = useState('20:00');
  const [guest, setGuest] = useState('');
  const [email, setEmail] = useState('');

  const [, setTitleIsVisited] = useState(false);
  const [titleIsValid, setTitleIsValid] = useState(false);
  const [titleMessage, setTitleMessage] = useState('');

  const onBlurTitleHandler = () => {
    const [isValid, message] = isValidTitle(title);
    setTitleIsVisited(true);
    setTitleIsValid(isValid);
    setTitleMessage(message);
  };

  const [, setGuestIsVisited] = useState(false);
  const [guestIsValid, setGuestIsValid] = useState(false);
  const [guestMessage, setGuestMessage] = useState('');

  const onBlurGuestHandler = () => {
    const [isValid, message] = isValidGuest(guest);
    setGuestIsVisited(true);
    setGuestIsValid(isValid);
    setGuestMessage(message);
  };

  const [, setEmailIsVisited] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [emailMessage, setEmailMessage] = useState('');

  const onBlurEmailHandler = () => {
    const [isValid, message] = isValidEmail(email);
    setEmailIsVisited(true);
    setEmailIsValid(isValid);
    setEmailMessage(message);
  };

  const validForm = titleIsValid && guestIsValid && emailIsValid;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      title,
      description,
      location,
      startDate,
      startTime,
      guest,
      email
    );

    const eventObj = {
      event: title,
      description,
      location,
      startDate,
      startTime,
      endDate,
      endTime,
      guest,
      email,
    };

    const newEvent = await createEvent(eventObj);

    if (newEvent.success) {
      console.log(newEvent);
      window.location.reload();
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <label htmlFor="event">Event</label>
          <input
            type="text"
            placeholder="Event title"
            id="event"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={onBlurTitleHandler}
          />
          {titleMessage ? <p>{titleMessage}</p> : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="20"
            rows="3"
            placeholder="Describe your event-suggestion..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Where do you want to meet?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="startDate">Start</label>
          <DateWrapper>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="time"
              id="startTime"
              min="00.00"
              max="23.59"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="time"
            />
          </DateWrapper>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="startDate">End</label>
          <DateWrapper>
            <input
              type="date"
              id="startDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <input
              type="time"
              id="startTime"
              min="00.00"
              max="23.59"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="time"
            />
          </DateWrapper>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="guest">Name</label>
          <input
            type="text"
            id="guest"
            placeholder="Tell us who you are"
            value={guest}
            onChange={(e) => setGuest(e.target.value)}
            onBlur={onBlurGuestHandler}
          />
          {guestMessage ? <p>{guestMessage}</p> : null}
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={onBlurEmailHandler}
          />
          {emailMessage ? emailMessage : null}
        </InputWrapper>
        <Button disabled={!validForm}>Send eventrequest</Button>
      </Form>
    </div>
  );
}

export default SuggestEvent;

const DateWrapper = styled.div`
  display: flex;
  gap: 0.5rem;

  .time {
    width: 60%;
  }
`;

const Form = styled.form`
  background-color: ${COLORS.backgroundForm};
  border-radius: 1rem;
  border: 1px solid ${COLORS.mediumgrey};
  max-width: 350px;
  margin: 0 auto;
  padding: 0.6rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;

const InputWrapper = styled.div`
  margin: 0 auto 0.7rem;
  width: 95%;

  & label {
    display: block;
    margin-bottom: 0.3rem;
  }

  & input,
  & textarea {
    font: inherit;
    border-radius: 0.5rem;
    border: 1px solid ${COLORS.mediumgrey};
    outline: none;
    padding: 0.5rem 1rem;
    width: 100%;

    &:focus {
      outline: 2px dashed ${COLORS.considerd};
      outline-offset: 4px;
    }
  }

  p {
    margin-top: 0.4rem;
  }
`;

const Button = styled.button`
  background-color: ${COLORS.lightgrey};
  cursor: pointer;
  border-radius: 0.5rem;
  border: none;
  margin-top: 0.5rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    background-color: ${COLORS.mediumgrey};
  }

  &:focus {
    outline: 2px dashed ${COLORS.considerd};
    outline-offset: 4px;
  }

  &:disabled {
    cursor: default;

    &:hover {
      background-color: ${COLORS.lightgrey};
    }
  }
`;

const isValidTitle = (title) => {
  if (title.length < 3) {
    return [false, '❌ Set a title for the event'];
  } else {
    return [true, ''];
  }
};

const isValidGuest = (guest) => {
  if (guest.length <= 2) {
    return [false, '❌ Please tell us who you are'];
  } else {
    return [true, ''];
  }
};

const isValidEmail = (email) => {
  if (email.length <= 2) {
    return [false, '❌ Enter your email'];
  } else if (!email.includes('@') || !email.includes('.')) {
    return [false, '❌ Enter a valid email'];
  } else {
    return [true, ''];
  }
};
