const db = require('../config/db');

const Conference = {
  create: async (name, hostId) => {
    const [result] = await db.query('INSERT INTO conferences (name, host_id) VALUES (?, ?)', [name, hostId]);
    return result.insertId;
  },

  findAll: async () => {
    const [rows] = await db.query('SELECT * FROM conferences');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM conferences WHERE id = ?', [id]);
    return rows[0];
  },

  addParticipant: async (conferenceId, userId) => {
    await db.query('INSERT INTO participants (conference_id, user_id) VALUES (?, ?)', [conferenceId, userId]);
  },

  getParticipants: async (conferenceId) => {
    const [rows] = await db.query('SELECT users.id, users.username FROM participants JOIN users ON participants.user_id = users.id WHERE conference_id = ?', [conferenceId]);
    return rows;
  },
};

module.exports = Conference;
