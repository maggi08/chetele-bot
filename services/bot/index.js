const { Telegraf } = require('telegraf');
const axios = require('axios');
let bot = undefined;

function initCommands() {
  bot.command('start', ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(
      ctx.chat.id,
      'Hello there! Welcome to the Code Capsules telegram bot.\nI respond to /ethereum. Please try it',
      {}
    );
  });

  bot.command('ethereum', ctx => {
    var rate;
    console.log(ctx.from);
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
      )
      .then(response => {
        console.log(response.data);
        rate = response.data.ethereum;
        const message = `Hello, today the ethereum price is ${rate.usd}USD`;
        bot.telegram.sendMessage(ctx.chat.id, message, {});
      });
  });

  bot.command('hello', ctx => {
    console.log(ctx.from);
    bot.telegram.sendMessage(ctx.chat.id, 'Hello there!', {});
  });
}

function init() {
  bot = new Telegraf(process.env.BOT_TOKEN);
  console.log(process.env.BOT_TOKEN, bot);
  bot.launch();
  initCommands();
}

const BotService = {
  init,
};

module.exports = bot;
module.exports = BotService;
