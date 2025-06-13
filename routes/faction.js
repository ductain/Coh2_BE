const express = require('express');
const router = express.Router();
const factionController = require('../controllers/factionController');

/**
 * @swagger
 * /factions:
 *   get:
 *     summary: Get all factions
 *     description: Retrieve a list of all factions in the database.
 *     responses:
 *       200:
 *         description: A list of factions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   icon:
 *                     type: string
 */
router.get('/', factionController.getAllFactions);

/**
 * @swagger
 * /factions/{id}:
 *   get:
 *     summary: Get a faction by ID
 *     description: Retrieve a single faction by its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the faction
 *     responses:
 *       200:
 *         description: Faction found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 icon:
 *                   type: string
 *       404:
 *         description: Faction not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/:id', factionController.getFactionById);

module.exports = router; 