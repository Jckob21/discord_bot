const { Client, Intents, DiscordAPIError } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.once('ready', () => {
    console.log('CurveBan is alive!');
});


// commands handling
// get file system
const fs = require('fs');
client.commands = new Map();

// get all handlers for commands
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// create set with commands and appropriate handle files
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

const prefix = '!';

client.on('message', message =>{
    if(message.content.includes("bot") && message.content.includes("pierdoli")) {
        message.channel.send("wypierdalaj");
    }
    
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    // remove the prefix and split the message into words
    const args = message.content.slice(prefix.length).split(" ");

    // get the first word of the message and toLowerCase
    const command = args.shift().toLowerCase();

    

    if(command === 'emperor') {
        client.commands.get('emperor').execute(message, args);
    }
});



var json = require("./token.json");

// last line of the file
client.login(json.discord_token);
