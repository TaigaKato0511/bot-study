'use strict';
const bolt = require(`@slack/bolt`);
const dotenv = require('dotenv');
dotenv.config();

const app = new bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
  logLevel: 'debug'
});

app.message(/おみくじ/i, ({ message, say }) => {
  say(`${omikuji()} ,<@${message.user}>さん`);
});

function omikuji() {
  const tmp = Math.floor(Math.random() * 5);
  let result = "";
  switch (tmp) {
    case 0:
      result = "大吉";
      break
    case 1:
      result = "吉";
      break
    case 2:
      result = "中吉";
      break
    case 3:
      result = "末吉";
      break
    case 4:
      result = "凶";
      break
  }
  return result;
}
app.start();