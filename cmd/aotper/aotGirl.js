const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('aotw')
    .setDescription('AOT WO SUPREMACY'),
    async execute(client, interaction) {
     interaction.reply(`https://i.pinimg.com/564x/ac/bb/49/acbb49db9f3523f529d86b6757356a23.jpg`);} 
}