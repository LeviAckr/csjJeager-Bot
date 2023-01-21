const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('NET PADROCA'),

  async execute(client, interaction) {
    interaction.reply(`${client.emojis.cache.get(`1066210454449442928`)}   **TATAKAE ** o ping é aproximadamente **${client.ws.ping}ms** ${client.emojis.cache.get(`1066210454449442928`)}`);
  }
}