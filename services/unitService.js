const pool = require('../config/pool');

exports.getUnitsByFactionId = async (factionId) => {
  const result = await pool.query('SELECT * FROM "units" WHERE "factionid" = $1', [factionId]);
  return result.rows;
}; 