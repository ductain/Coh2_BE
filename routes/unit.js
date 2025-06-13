const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');

/**
 * @swagger
 * /units/faction/{factionId}:
 *   get:
 *     summary: Get units by faction ID
 *     description: Retrieve a list of units for a specific faction.
 *     parameters:
 *       - in: path
 *         name: factionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The UUID of the faction
 *     responses:
 *       200:
 *         description: A list of units
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/faction/:factionId', unitController.getUnitsByFactionId);

module.exports = router; 