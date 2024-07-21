const Conference = require('../models/Conference');

const createConference = async (req, res) => {
  const { name } = req.body;
  const hostId = req.userId;

  const conferenceId = await Conference.create(name, hostId);
  res.status(201).json({ conferenceId });
};

const getConferences = async (req, res) => {
  const conferences = await Conference.findAll();
  res.status(200).json({ conferences });
};

const joinConference = async (req, res) => {
  const { conferenceId } = req.body;
  const userId = req.userId;

  await Conference.addParticipant(conferenceId, userId);
  res.status(200).json({ message: 'Joined conference' });
};

const getParticipants = async (req, res) => {
  const { conferenceId } = req.params;

  const participants = await Conference.getParticipants(conferenceId);
  res.status(200).json({ participants });
};

module.exports = { createConference, getConferences, joinConference, getParticipants };
