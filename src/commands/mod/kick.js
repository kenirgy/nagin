'use strict';
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Kickes a user from your server'),
	async execute(interaction) {
		await interaction.deferReply();
		// TODO: Add a check to see if the user has the permission to kick
	},
};