const commanderService = require('../services/commanderService');

exports.getCommandersByFactionId = async (req, res) => {
  try {
    const { factionId } = req.params;
    const commanders = await commanderService.getCommandersByFactionId(factionId);
    res.json(commanders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch commanders' });
  }
}; 