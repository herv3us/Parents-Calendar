const mongoose = require('mongoose');
const User = require('./../models/userModel');
const Event = require('./../models/eventModel');
const ErrorResponse = require('./../utilites/errorRes');

async function getAllEvents(req, res, next) {
  try {
    const events = await Event.find({});
    res.status(200).json({
      success: true,
      events: events,
    });
  } catch (err) {
    next(err);
  }
}

async function getEventById(req, res, next) {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);
    const user = await User.findById(req.userId);

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    if (!event) {
      return next(new ErrorResponse('Event not found', 404));
    }
    res.status(200).json({
      success: true,
      event: event,
    });
  } catch (err) {
    next(err);
  }
}

async function createOwnEvent(req, res, next) {
  try {
    const event = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return next(new ErrorResponse('User not found', 404));
    }

    event.ownerId = req.userId;

    const newEvent = await Event.create(event);
    res.status(201).json({
      success: true,
      event: newEvent,
      user: user,
    });
  } catch (err) {
    next(err);
  }
}

async function createEvent(req, res, next) {
  try {
    const event = req.body;

    event.ownerId = '61f6e2c3f41891e7106854b8';

    const newEvent = await Event.create(event);
    res.status(201).json({
      success: true,
      event: newEvent,
    });
  } catch (err) {
    next(err);
  }
}

async function updateEvent(req, res, next) {
  try {
    const eventId = req.params.id;
    const event = await Event.find(eventId);

    if (!event) {
      return next(new ErrorResponse('Event not fount', 404));
    }

    if (event.ownerId !== req.userId) {
      return next(new ErrorResponse('Not authorized', 401));
    }

    const updateEvent = await Event.findByIdAndUpdate(eventId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      event: updateEvent,
    });
  } catch (err) {
    next(err);
  }
}

async function deleteEvent(req, res, next) {
  try {
    const eventId = req.params.id;
    const event = await Event.findById(eventId);

    if (!event) {
      return next(new ErrorResponse('Event not found', 404));
    }

    if ((event.ownerId = req.userId)) {
      return next(new ErrorResponse('Not authorized', 401));
    }

    await Event.findByIdAndDelete(event);
    const user = await User.findById(req.userId);

    res.status(200).json({
      success: true,
      message: 'Event deleted',
      user: user,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  createOwnEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
