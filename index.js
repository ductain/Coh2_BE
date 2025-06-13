require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5000",
  "https://coh2-be.vercel.app",
  "https://coh2-fe.vercel.app",
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use(express.json());
const config = require('./config/default');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const factionRoute = require('./routes/faction');
const unitRoute = require('./routes/unit');
const commanderRoute = require('./routes/commander');
const chatRoute = require('./routes/chat');

app.use('/factions', factionRoute);
app.use('/units', unitRoute);
app.use('/commanders', commanderRoute);
app.use('/chat', chatRoute);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'COH2 API',
      version: '1.0.0',
      description: 'API documentation for Company of Heroes 2',
    },
    servers: [
      { url: 'http://localhost:' + config.port },
    ],
    tags: [
      { name: 'Chat', description: 'Chat with Gemini AI as Stalin about Company of Heroes 2' },
      // ... other tags if needed
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
}); 