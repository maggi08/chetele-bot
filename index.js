const express = require('express');
const expressApp = express();
const path = require('path');
const BotService = require('./services/bot');
require('dotenv').config();

const port = process.env.PORT || 3000;

expressApp.use(express.static('static'));
expressApp.use(express.json());

expressApp.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

BotService.init();
