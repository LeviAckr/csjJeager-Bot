require('dotenv').config()

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
		GatewayIntentBits.GuildMessageReactions
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

	// Logando com a pasta de comandos!
	client.commands = new Collection();
	const commandsPath = path.join(__dirname, 'cmd/commands');
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	client.commands = new Collection();
	const commandsPath2 = path.join(__dirname, 'cmd/aotper');
	const commandFiles2 = fs.readdirSync(commandsPath2).filter(file => file.endsWith('.js'));

	
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);

		if ('data' in command && 'execute' in command)
			client.commands.set(command.data.name, command);
		else
			console.log(`[WARNING] O comando ${filePath} ainda não possui o necessario para sua execusão.`);
	}

	for (const file of commandFiles2) {
		const filePath = path.join(commandsPath2, file);
		const command = require(filePath);

		if ('data' in command && 'execute' in command)
			client.commands.set(command.data.name, command);
		else
			console.log(`[WARNING] O comando ${filePath} ainda não possui o necessario para sua execusão.`);
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
		activities: [{ name: `🎧 Som na caixa Dj 🎤`, type: ActivityType.Playing }],
		status: 'online',
	});

	const levi = client.emojis.cache.get("1066189970919923782")
	const mikasa = client.emojis.cache.get("1066189968722120835")

	client.on("messageCreate", (message) => {
		if (message.mentions.has(client.user))
			message.channel.send(`${mikasa} \`Prontinho pra tocar sua música\` ${levi}`)
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