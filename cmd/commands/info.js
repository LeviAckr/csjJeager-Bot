const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const {aot} = require("../../emj/aot.json")
module.exports = {
    data: new SlashCommandBuilder()
        .setName('infos')
        .setDescription('infos do bot'),
    async execute(client, interaction, message, mentions) {

        
         let gif = Math.round((aot.length - 1) * Math.random());

        const embed = new EmbedBuilder()
            .setTitle(`${client.emojis.cache.get(`815317391009120268`)} BEM VINDO A PARADIS)`)
            .setColor("#000000")
            .setDescription("π΄ **ANDANDO POR AI COM MEU DMT** π΄"  +
            ("\n") + 
            ("\n") + 
            ("\nSou um bot exclusivo do servidor `csj`") + 
            ("\n") + 
            ("\n") +  
            ("\n π  Voce pode acessar meu suporte a partir do comando `/git` assim como tambem pode ver todos meus comandos utilizando /help") + 
            ("\n") +  
            ("\n> π π π π UTILIZO O SISTEMA `AGTNODE` mais informaΓ§Γ΅es sobre no meu repositorio") +
            ("\n") +  
            ("\n - π‘- π‘- π‘- π‘- π‘- π‘- π‘") +  
            ("\n") + 
            ("\n **ME CONTATE PELO DISCORD** ``LeviArk#0001``")  + 
            ("\n") +  
            ("\n") +  
            ("\n π― **SHINZOU WO SASAGEYO** π―")   +
            ("\n")   
            
            )
           
            .setThumbnail("https://nerdhits.com.br/wp-content/uploads/2021/03/Levi-1200x900.jpg")
            .setURL("https://github.com/LeviAckr/csjJeager-Bot")
           .setImage(aot[gif])
            
        interaction.reply({ embeds: [embed]})

       
        
       
    }
}