const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('armin')
    .setDescription('ARMIN SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/16/21/98/16219824a510ea904deac48ad3fc115c.jpg`);} 
}