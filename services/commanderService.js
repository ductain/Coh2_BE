const pool = require('../config/pool');

exports.getCommandersByFactionId = async (factionId) => {
  const result = await pool.query('SELECT * FROM "commanders" WHERE "factionid" = $1', [factionId]);
  return result.rows;
}; 