const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('levi')
    .setDescription('LEVI SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/da/10/3c/da103c5cb96dc32bd722d2a2b902f2d0.jpg`);} 
}