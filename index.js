const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_MEMBERS"
	]
})
const PREFIX = '/';
var version = '1.0.0'

client.on("ready", () => {

	console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
		let args = message.content.substring(PREFIX.length).split(" ")

		switch(args[0]){
			case 'name':
				if(arg[1] === GUILD_MEMBERS)
					message.reply("They will be muted")
				break;
			case 'version':
				message.reply('Version '+ version)
				break;
			/*case 'clear':
				if (!args[1]) return message.reply('Who needs to be annoyed?')
				message.channel.bulkDelete(args[1]);
				break;
				*/
		}
/*{
		
		
		var message1 = message.content;
		
		var fields= message1.split('-');
		var command = fields[0];
		var nAme = fields[1];
		message.reply(`You got it! ${fields[1]}`);
	}
	*/
})

client.login(process.env.TOKEN)


/*
Discord.js documentation: https://discord.js.org/
Javascript documentation: https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbl9LRm5BOE5kVVQ2dW9ldVI5aGxYRy1KaU1GUXxBQ3Jtc0trZW15UnNvUDlPNVFQQWZCYmlzV0F2LXpVRzcxbm9LUEtsNXkwQ2EyZV9xZlBaUFM3Q1pnb0RyT251WlhXd2wwbGl1cWZfbUI1S1pBU05id0RTUlpJbTVxdkl3LTFOTllLOS0wdmNKQkU0VUtZcHd5OA&q=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript
*/