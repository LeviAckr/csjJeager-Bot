const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { commands } = require('wax-command-handler');
module.exports = {


    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('embed'),

    async execute(client, interaction) {
        const embed = new EmbedBuilder()
        .setTitle("Uwu")
        .setColor("#000000")
        .setDescription("Jpoa")


        interaction.reply({ embeds: [embed] });

    },



};