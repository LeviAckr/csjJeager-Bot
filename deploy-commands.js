require('dotenv').config()
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const { readdirSync } = require('fs')

const commands = [];
// Pegue todos os arquivos de comando do diretório de comandos que você criou anteriormente



// Pegue a saída SlashCommandBuilder#toJSON() dos dados de cada comando para implantação
for (const folder of readdirSync(`${__dirname}/cmd/`)) {
	for (const file of readdirSync(`${__dirname}/cmd/${folder}`).filter(file => file.endsWith('.js'))) {

		const command = require(`./cmd/${folder}/${file}`)
		commands.push(command.data.toJSON())
	}
}
// Constrói e prepara uma instância do módulo REST
const rest = new REST({ version: '10' }).setToken(process.env.token);

// tipo 0 -> comandos locais; tipo 1 -> comandos globais
const tipo = 0, exclusao = 0;

(async () => {
	try {
		console.log(`Iniciado reiniciando ${commands.length} app (/) commands.`);

		let data = 0;

		if (!tipo) // Comandos locais
			data = await rest.put(
				Routes.applicationGuildCommands(clientId, guildId),
				{ body: commands },
			);

		if (tipo) // Comandos globais
			data = await rest.put(
				Routes.applicationCommands(clientId),
				{ body: commands },
			);

		if (exclusao)
			rest.get(Routes.applicationCommands(clientId))
				.then(data => {
					const promises = []

					for (const command of data) {
						const deleteUrl = `${Routes.applicationCommands(clientId)}/${command.id}`
						promises.push(rest.delete(deleteUrl))
					}

					console.log("Desativando os comandos slash registrados globalmente e em servidor.")
					return Promise.all(promises)
				})

		console.log(`Sucesso Bota pra carregar ${data.length} apo (/) commands.`);
	} catch (error) {
		// E, claro, certifique-se de detectar e registrar quaisquer erros!
		console.error(error);
	}
})();