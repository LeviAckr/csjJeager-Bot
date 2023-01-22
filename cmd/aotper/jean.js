const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('jean')
    .setDescription('JEAN SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/01/49/c7/0149c7d2fc5f688d5275dbfc08595123.jpg`);} 
}