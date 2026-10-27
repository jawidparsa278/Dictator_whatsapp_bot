const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not configured. Add a new token from BotFather to the BOT_TOKEN environment variable.');
}

module.exports = { BOT_TOKEN };
