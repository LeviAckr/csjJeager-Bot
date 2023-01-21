const { SlashCommandBuilder } = require('discord.js');
const { commands } = require('wax-command-handler');
module.exports = {

    
    data: new SlashCommandBuilder()
        .setName('rodar')
        .setDescription('ULTRA BUGS ATOMICOS'),

    async execute(client, interaction) {
		interaction.reply(`${client.emojis.cache.get(`1066235975577128970`)} 		Rodando \`index.js\` ... instalando \`npm i bliMSC-csjMusic\``);
    },
	
	
    
};