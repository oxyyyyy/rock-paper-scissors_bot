const TelegramBot = require("node-telegram-bot-api");
const token = "622911361:AAEUqbrMzPc4NqEst4Jx57AS7Jh8HT_S7XQ";

const bot = new TelegramBot(token, { polling: true });

// const emoji = {
//   stone: "🗿",
//   scissors: "✂",
//   paper: "📄"
// }
const emoji = {
  stone: "stone",
  scissors: "scissors",
  paper: "paper"
};
let firstPlayerChoise;

bot.onText(/\/firstPlayer/, msg => {
  bot.sendMessage(msg.chat.id, "Choose:", {
    reply_markup: {
      keyboard: [[emoji.stone, emoji.scissors, emoji.paper]]
    }
  });
});

bot.onText("stone", msg => {
  // firstPlayerChoise = msg;
  bot.sendMessage(msg.chat.id, msg);
  console.log(msg);
});

// * Error listener
bot.on("polling_error", error => {
  console.log(error); // => 'EFATAL'
});
