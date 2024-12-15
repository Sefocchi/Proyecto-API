const express = require('express');
const { getAllEvents, createEvent } = require('../controllers/eventController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllEvents);
router.post('/', authenticateToken, createEvent);

module.exports = router;
