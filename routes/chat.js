const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Chat with Gemini AI as Stalin about Company of Heroes 2
 *     tags: [Chat]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userInput:
 *                 type: string
 *                 example: Tell me about the T-34 tank
 *     responses:
 *       200:
 *         description: Gemini AI response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: string
 *                   example: Ah, the T-34, a symbol of Soviet engineering...
 *       400:
 *         description: Invalid request body
 *       500:
 *         description: Internal Server Error
 */
router.post('/', chatController.chat);

module.exports = router; 