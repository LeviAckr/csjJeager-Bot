const { SlashCommandBuilder } = require('discord.js')
const {aot} = require("../../emj/aotG.json")

module.exports = {
  data: new SlashCommandBuilder()
    .setName('aot')
    .setDescription('Mostra um gif aleatorio de Attack On Titan'),

    //executador
  async execute(client, interaction) {

    let gif = Math.round((aot.length - 1) * Math.random());
    let falas = [
        "**TATAKAE**",
        "**SASAGEYO**",
        "OFEREÇAM SEUS CORAÇÕES"

    ]
    let fala = Math.round((falas.length - 1) * Math.random())

    interaction.reply(falas[fala] + aot[gif]);
  }
}