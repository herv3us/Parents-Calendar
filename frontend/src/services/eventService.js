export const createEvent = async (event) => {
  const res = await fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event),
  });

  const eventData = await res.json();
  return eventData;
};

export const getAllEvents = async () => {
  const res = await fetch('/api/events');
  const events = await res.json();
  return events;
};
