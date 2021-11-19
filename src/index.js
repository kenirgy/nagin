'use strict';
require('dotenv').config({path: './.env'});
const glob = require('glob');
const { Client, Collection, Intents } = require('discord.js');
const path = require('path');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS
    ] 
});

client.commands = new Collection();

// Global Command loading
const commandFiles = [];
commandFiles.push(...glob.sync(`${path.join(__dirname, './commands')}/**/*.js`));
for (const file of commandFiles) {
    const command = require(file);
    client.commands.set(command.data.name, command);
}

// Event files loading
const eventFiles = [];
eventFiles.push(...glob.sync(`${path.join(__dirname, './events')}/*.js`));
for (const file of eventFiles) {
    const event = require(file);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

client.login(process.env.TOKEN);