const factionService = require('../services/factionService');

exports.getAllFactions = async (req, res) => {
  try {
    const factions = await factionService.getAllFactions();
    res.json(factions);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getFactionById = async (req, res) => {
  try {
    const { id } = req.params;
    const faction = await factionService.getFactionById(id);
    if (!faction) {
      return res.status(404).json({ message: 'Faction not found' });
    }
    res.json(faction);
  } catch (error) {
    res.status(500).json(error);
  }
}; 