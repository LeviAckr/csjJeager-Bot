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
        "**OFEREÇAM SEUS CORAÇÕES**",
        "**SHINZOU WO SASAGEYO**"

    ]
    let fala = Math.round((falas.length - 1) * Math.random())
    const channel = interaction.channel
    interaction.reply(falas[fala]);
    client.channels.cache.get(channel.id).send(aot[gif])
  }
}