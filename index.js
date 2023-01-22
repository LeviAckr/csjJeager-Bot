require('dotenv').config()
const { readdirSync } = require('fs')

const { Client, GatewayIntentBits, IntentsBitField, ActivityType, Collection, Events, message, Partials, SlashCommandBuilder } = require('discord.js')

const fs = require('fs')
const path = require('node:path')
const handler = require(`wax-command-handler`)

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		IntentsBitField.Flags.GuildMembers,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildVoiceStates
	],
	partials: [
		Partials.Message,
		Partials.GuildMember,
		Partials.Reaction,
		Partials.User,
		Partials.Channel
	]
})

const prefix = "["

client.on("ready", () => {
client.commands = new Collection();
	// Logando com a pasta de comandos!
	for (const folder of readdirSync(`${__dirname}/cmd/`)) {
		for (const file of readdirSync(`${__dirname}/cmd/${folder}`).filter(file => file.endsWith('.js'))) {
			const command = require(`./cmd/${folder}/${file}`)




			if ('data' in command && 'execute' in command)
				client.commands.set(command.data.name, command);
			else
				console.log(`[WARNING] O comando ${filePath} ainda não possui o necessario para sua execusão.`);
		}
	}
	client.on(Events.InteractionCreate, async interaction => {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(client, interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});

	// Inicio
	client.user.setPresence({
		activities: [{ name: `🌪 ATTACK ON TITAN 🌪`, type: ActivityType.Watching }],
		status: 'online',
	});

	const levi = client.emojis.cache.get("1066189970919923782")
	const mikasa = client.emojis.cache.get("1066189968722120835")

	client.on("messageCreate", (message) => {
		if (message.mentions.has(client.user))
			message.channel.send(`${mikasa} \` TATAKAE utilize /help para ver meus comandos\` ${levi}`)
	})

	// PING CMMD
	client.on("messageCreate", (message) => {
		if (message.author.bot) return

		if (message.content === `${prefix}ping`) {
			const um = client.emojis.cache.get("1066210454449442928")
			message.channel.send(`${um} **TATAKAE** o ping é aproximadamente **${client.ws.ping}ms** ${um}`)
		}
	})

	console.log("Pronto Para Tocar 🎼")
});

client.login(process.env.token)