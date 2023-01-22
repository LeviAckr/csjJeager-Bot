const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('reverter')
    .setDescription('REVERTE UM TEXTO')
    .addStringOption (option =>
        option
        .setName('texto')
        .setDescription('Invertendo TATAKAE') 
        .setRequired(true)),
  async execute(client, interaction, args) {
    const revert = interaction.options.data[0].value.split('').reverse().join("")

    const embed = new EmbedBuilder()
        .setTitle(`🕖 Texto invertido ai 🕚 `)
        .setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL({ dynamic: true }) })
        .setColor("#6959CD")
        .setDescription(`\`${revert}\``)

    interaction.reply({ embeds: [embed], ephemeral: true })
  }
  }