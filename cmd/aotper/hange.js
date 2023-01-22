const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('hange')
    .setDescription('HANGE SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/0f/09/25/0f0925b3a62c987094cdc7243684c140.jpg`);} 
}