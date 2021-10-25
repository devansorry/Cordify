const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Replies with info things!'),
	async execute(interaction) {
		await interaction.reply('Hi there! Im Cordify and Im here to make *your*  Discord experience better. Keep using this command for updates!');
	},
};
