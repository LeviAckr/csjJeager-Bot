const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('erwin')
    .setDescription('ERWIN SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://cdn.discordapp.com/attachments/827577695520030740/1066546939325329508/e9170532ba1a0619de0118cb20d1ee0d.png`);} 
}