const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ram')
    .setDescription('RAM DO BOTE'),

  async execute(client, interaction) {

    let ram = process.memoryUsage().heapUsed / 1024 / 1024
    
    interaction.reply(`${client.emojis.cache.get(`1066743516497186877`)}   **TATAKAE ** estou usando  **${ram.toFixed(2)}%** de ram ${client.emojis.cache.get(`1066743516497186877`)}`);
  }
}