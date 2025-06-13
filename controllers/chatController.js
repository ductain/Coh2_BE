const chatService = require('../services/chatService');

exports.chat = async (req, res) => {
  try {
    const {userInput} = req.body;
    console.log('incoming /chat req', userInput);
    if (!userInput) {
      return res.status(400).json({ error: 'Invalid request body' });
    }
    const response = await chatService.runChat(userInput);
    res.json({ response });
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}