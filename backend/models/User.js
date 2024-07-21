const db = require('../config/db');

const User = {
  create: async (username, passwordHash) => {
    const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, passwordHash]);
    return result.insertId;
  },

  findByUsername: async (username) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0];
  },

  findById: async (id) => {
    const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },
};

module.exports = User;
