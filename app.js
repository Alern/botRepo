const http = require('http');
const Bot = require('messenger-bot');

let bot = new Bot({
    token: process.env.PAGE_TOKEN || '',
    verify: process.env.VERIFY_TOKEN || '',
});

bot.on('error', (err) => {
    console.log(err.message)
});

bot.on('message', (payload, reply) => {
    let text = payload.message.text;

    reply({ text: 'Hello, I am an interactive bot :)' }, function(err) {
        if (err) console.log(err);
    });
 reply({ text: 'i talk less though ;-)' }, function(err) {
        if (err) console.log(err);
    });

});

let port = process.env.PORT || 3000;
http.createServer(bot.middleware()).listen(port);
