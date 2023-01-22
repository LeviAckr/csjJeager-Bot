const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const {aot} = require("../../emj/aot.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('git')
        .setDescription('repo do bot'),
    async execute(client, interaction) {


         let gif = Math.round((aot.length - 1) * Math.random());

        const embed = new EmbedBuilder()
            .setTitle(`${client.emojis.cache.get(`1066467891223986340`)} Repositorio (CSJ JEAGER) ${client.emojis.cache.get(`1066467891223986340`)}`)
            .setColor("#000000")
            .setDescription(":arrow_up: Repositorio Acima :arrow_up: ")
            .setURL("https://github.com/LeviAckr/csjJeager-Bot")
           .setImage(aot[gif])
            
        interaction.reply({ embeds: [embed]})

       
        
       
    }
}