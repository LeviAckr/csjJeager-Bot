const { SlashCommandBuilder} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fala')
    .setDescription('FAZ O BOT FALAR'),

  async execute(client, interaction, args, message) {

    let content = ''
        let deleteMsg = [false, 0]
        if (args[0] == '-del') deleteMsg = [true, 1]
        interaction.reply( `| ${message.author} Mandou eu falar 📩 `);   
        for (let msg = 0 + deleteMsg[1]; msg < args.length; msg++) {
          content += args[msg] + " "
        }
        if (content.length != 0) {
            interaction.reply(content)
           if (deleteMsg[0]) {
              message.delete()
           }
         } else {
           interaction.reply('nao posso enviar nada vazio!')
         }
  }
}