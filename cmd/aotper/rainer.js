const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rainer')
    .setDescription('RAINER SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/e0/ad/1f/e0ad1f8feade7c73852886399b4cbdb8.jpg`);} 
}