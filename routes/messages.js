const router = require('express').Router();
const builder = require('botbuilder');

const connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});
router.post('/', connector.listen());

var bot = new builder.UniversalBot(connector, function (session) {
    session.send("Bạn vừa chat: %s", session.message.text);
});

module.exports = router;