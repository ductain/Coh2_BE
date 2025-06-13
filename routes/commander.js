const express = require('express');
const router = express.Router();
const commanderController = require('../controllers/commanderController');

/**
 * @swagger
 * /commanders/faction/{factionId}:
 *   get:
 *     summary: Get commanders by faction ID
 *     description: Retrieve a list of commanders for a specific faction.
 *     parameters:
 *       - in: path
 *         name: factionId
 *         required: true
 *         schema:
 *           type: string
 *         description: The UUID of the faction
 *     responses:
 *       200:
 *         description: A list of commanders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/faction/:factionId', commanderController.getCommandersByFactionId);

module.exports = router; 