const { Router } = require('express');
const router = new Router();
const eventController = require('./../controllers/eventController');
const tokenHandler = require('./../middleware/tokenHandler');

router.post('/', eventController.createEvent);

router.get('/', eventController.getAllEvents);

router.get('/', eventController.getEventById);

router.post('/', tokenHandler, eventController.createOwnEvent);

router.put('/:id', tokenHandler, eventController.updateEvent);

router.delete('/:id', tokenHandler, eventController.deleteEvent);

module.exports = router;
