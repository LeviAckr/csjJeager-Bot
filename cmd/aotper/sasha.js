const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sasha')
    .setDescription('SASHA SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/db/ab/90/dbab900913fba002aed1280a7353ef17.jpg`);} 
}