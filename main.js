const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
    console.log('CurveBan is alive!');
});




var json = require("./token.json");

// last line of the file
client.login(json.discord_token);
