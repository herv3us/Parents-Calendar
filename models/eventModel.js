const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: [true, 'Please enter an event title'],
  },
  description: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: [true, 'Please enter a date'],
  },
  guest: {
    type: String,
    required: [true, 'Please tell us who you are...'],
  },
  email: {
    type: String,
    required: true,
  },
});

eventSchema.set('toJSON', {
  transform: (document, returndObject) => {
    returndObject.id = returndObject._id.toString();
    delete returndObject._id;
    delete returndObject.__v;
  },
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
