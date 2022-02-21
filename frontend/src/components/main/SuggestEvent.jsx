import React, { useState } from 'react';
import styled from 'styled-components';

function SuggestEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('goteborg');

  return (
    <div>
      <Form>
        <InputWrapper>
          <label htmlFor="event">Event</label>
          <input
            type="text"
            placeholder="Event"
            id="event"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="20"
            rows="10"
            placeholder="Please describe your suggestion..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="location">Location</label>
          <select
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="save">Säve</option>
            <option value="goteborg">Göteborg</option>
            <option value="nazare">Nazaré</option>
          </select>
        </InputWrapper>
      </Form>
    </div>
  );
}

export default SuggestEvent;

const Form = styled.form`
  border-radius: 1rem;
  border: 1px solid #ddd;
  max-width: 350px;
  margin: 0 auto;
  padding: 1rem;
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  width: 90%;

  & label {
    display: block;
    margin-bottom: 0.5rem;
  }

  & input,
  & textarea,
  & select {
    font: inherit;
    border-radius: 0.5rem;
    border: 1px solid #ddd;
    outline: none;
    padding: 0.5rem 1rem;
    width: 100%;
    /* resize: none; */

    &:focus {
      outline: 2px dotted #5b5b5b;
      outline-offset: 4px;
    }
  }
`;
