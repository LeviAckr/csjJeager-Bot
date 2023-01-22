const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const {aot} = require("../../emj/aot.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('comandos'),
    async execute(client, interaction) {


         let gif = Math.round((aot.length - 1) * Math.random());

        const embed = new EmbedBuilder()
            .setTitle(`${client.emojis.cache.get(`1066579618401894490`)} CSJ JEAGER **AJUDA** ${client.emojis.cache.get(`1066579618401894490`)}`)
            .setColor("#6E7B8B")
            .setDescription("\n**📑 COMANDOS 📑 **" +
            ("\n") + 
            ("\n") + 
            ("\n**⚔️ BASICOS ⚔️**") + 
            ("\n") + 
            ("\n`/git (REPOSITORIO DO BOT)`") +
            ("\n`/help (COMANDOS)`") + 
            ("\n") +
            ("\n") +   
            ("\n**🔧 PACOTES ⚙️**") + 
            ("\n") +
            ("\n`/instalar (INSTALA PACOTES PARA O SERVIDOR)`") +
            ("\n`/ping (MOSTRA O PING DO BOT)`") +
            ("\n") +
            ("\n** 🗡 ESPECIAIS (ATTACK ON TITAN) 🗡 **") +
            ("\n") +
            ("\n`/aot (GIFS DE AOT)`") +
            ("\n`/nome de algum personagem de aot (EX : /eren ou /levi)`") +
            ("\n`/aotw (ATTACK ON TITAN WOMEN SUPREMACY MEME)`") +
            ("\n") +
            ("\n") +
            ("\n**👨🏻‍🔧 CONTATE AJUDA DIRETAMENTE NO SERVIDOR DO CSJ 👨🏻‍🔧**") 

            
            
            
            
            
            )
            .setURL("https://github.com/LeviAckr/csjJeager-Bot")
           .setImage(aot[gif])
            
        interaction.reply({ embeds: [embed]})

       
        
       
    }
}