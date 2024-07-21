const express = require('express');
const authenticate = require('../middlewares/authMiddleware');
const { createConference, getConferences, joinConference, getParticipants } = require('../controllers/conferenceController');
const router = express.Router();

router.post('/create', authenticate, createConference);
router.get('/', authenticate, getConferences);
router.post('/join', authenticate, joinConference);
router.get('/:conferenceId/participants', authenticate, getParticipants);

module.exports = router;
