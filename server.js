var express = require('express');
var app = express();
var cors = require('cors');


const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '661955063:AAHAbSp8vLrrTJr93o086aV4T_l7QSa9BIs';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });

app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
res.end({mess: 'thanh cong'});
});

app.get('/fireNotification', function (req, res) {
    console.log(req.headers);
    let chatId = req.headers.chatid;
    bot.sendMessage(chatId, req.headers.coinname + ' ---- ' + req.headers.coinvalue);
    res.end('fireNotification');
    });

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})