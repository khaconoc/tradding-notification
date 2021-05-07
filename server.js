var express = require('express');
var app = express();
var cors = require('cors');


const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '661955063:AAHAbSp8vLrrTJr93o086aV4T_l7QSa9BIs';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const port = process.env.PORT || 8081;
app.listen(port, function () {
    console.log("app listening at", port);
});

app.get('/', function (req, res) {
    res.send({mess: 'load success'});
});

app.get('/fireNotification', function (req, res) {
    bot.sendMessage(req.headers.chatid, req.headers.coinname + ' ---- ' + req.headers.coinvalue);
    res.send('send fire');
});
