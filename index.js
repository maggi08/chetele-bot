const express = require('express')
const axios = require("axios");
const expressApp = express()
const path = require("path")
require('dotenv').config();
const { Telegraf } = require('telegraf');

const port = process.env.PORT || 3000;

expressApp.use(express.static('static'))
expressApp.use(express.json());

const bot = new Telegraf(process.env.BOT_TOKEN);

expressApp.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

bot.launch()