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
            .setDescription("\n**π COMANDOS π **" +
            ("\n") + 
            ("\n") + 
            ("\n**βοΈ BASICOS βοΈ**") + 
            ("\n") + 
            ("\n`/git (REPOSITORIO DO BOT)`") +
            ("\n`/help (COMANDOS)`") + 
            ("\n`/reverter (REVERTE SEU TEXTO)`") + 
            ("\n`/infos (INFORMAΓΓES DO BOT)`") + 
            ("\n") +
            ("\n") +   
            ("\n**π§ PACOTES βοΈ**") + 
            ("\n") +
            ("\n`/instalar (INSTALA PACOTES PARA O SERVIDOR)`") +
            ("\n`/ping (MOSTRA O PING DO BOT)`") +
            ("\n`/ram (CONSUMO DE RAM DO BOT)`") +
            ("\n") +
            ("\n** π‘ ESPECIAIS (ATTACK ON TITAN) π‘ **") +
            ("\n") +
            ("\n`/aot (GIFS DE AOT)`") +
            ("\n`/nome de algum personagem de aot (EX : /eren ou /levi)`") +
            ("\n`/aotw (ATTACK ON TITAN WOMEN SUPREMACY MEME)`") +
            ("\n") +
            ("\n") +
            ("\n**π¨π»βπ§ CONTATE AJUDA DIRETAMENTE NO SERVIDOR DO CSJ π¨π»βπ§**") 

            
            
            
            
            
            )
            .setURL("https://github.com/LeviAckr/csjJeager-Bot")
           .setImage(aot[gif])
            
        interaction.reply({ embeds: [embed]})

       
        
       
    }
}