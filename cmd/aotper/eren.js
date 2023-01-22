const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('eren')
    .setDescription('EREN SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/656b10c7cc5e09d0f8a4f380b51bd9641cb89e6dc2733333917f523fe7efc3cb_1.jpg`);} 
}