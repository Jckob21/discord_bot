const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
    console.log('CurveBan is alive!');
});


const prefix = '!';

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // remove the prefix and split the message into words
    const args = message.content.slice(prefix.length).split(" ");

    // get the first word of the message and toLowerCase
    const command = args.shift().toLowerCase();


    if(command === 'emperor') {
        message.channel.send('The only true emperor of the server is Jcob21 fucking bastards.');
    }
});



var json = require("./token.json");

// last line of the file
client.login(json.discord_token);
