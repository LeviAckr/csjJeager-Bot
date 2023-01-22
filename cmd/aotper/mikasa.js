const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mikasa')
    .setDescription('MIKASA SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/e1/1b/02/e11b02cf8c8c2e6bc899f1ba1dad3c8c.jpg`);} 
}