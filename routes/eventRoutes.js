const { Router } = require('express');
const router = new Router();
const eventController = require('./../controllers/eventController');
const tokenHandler = require('./../middleware/tokenHandler');

router.get('/', eventController.getAllEvents);

router.get('/', eventController.getEventById);

router.post('/', eventController.createEvent);

router.post('/', tokenHandler, eventController.createOwnEvent);

router.put('/:id', tokenHandler, eventController.updateEvent);

router.delete('/:id', tokenHandler, eventController.deleteEvent);
