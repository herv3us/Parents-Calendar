const { Router } = require('express');
const router = new Router();
const eventController = require('./../controller/eventController');
const tokenHandler = require('./../middleware/tokenHandler');

router.get('/', eventController.getAllEvents);

router.get('/', eventController.getEventById);

router.post('/', eventController.createEvent);

router.put('/:id', tokenHandler, eventController.updateEvent);

router.delete('/:id', tokenHandler, eventController.deleteEvent);
