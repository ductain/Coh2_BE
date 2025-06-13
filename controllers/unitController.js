const unitService = require('../services/unitService');

exports.getUnitsByFactionId = async (req, res) => {
  try {
    const { factionId } = req.params;
    const units = await unitService.getUnitsByFactionId(factionId);
    res.json(units);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch units' });
  }
}; 