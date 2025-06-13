const pool = require('../config/pool');

exports.getAllFactions = async () => {
  const result = await pool.query('SELECT * FROM factions');
  return result.rows;
};

exports.getFactionById = async (id) => {
  const result = await pool.query('SELECT * FROM factions WHERE id = $1', [id]);
  return result.rows[0];
}; 