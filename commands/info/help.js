const { Message, Client, MessageEmbed } = require("discord.js");
const { prefix, embedColor } = require('../../config.json');
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: ['h'],
    description: "Help command",
    usage: `help`, 
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(message.content.toLowerCase() === `${prefix}help`){
            var log = new MessageEmbed()
            .setTitle("**Help Menu: Main**")
            .setColor(embedColor)
            .addField(`**Rpg**`, `[ \`${prefix}help rpg\` ]`, true)
            .addField(`**Utility**`, `[ \`${prefix}help utility\` ]`, true)
            .addField(`**fun**`, `[ \`${prefix}help fun\` ]`, true)
        
        
        message.channel.send({embeds: [log]});
        } 
        
        
        else if(args[0].toLowerCase() === "util") {
            var embed = new MessageEmbed()
            .setTitle('**Help Menu: [Utility]**')
            .setColor(embedColor) // Set the color
            .setDescription("\n`\`\`js\n " + `1) Prefix [${prefix}help prefix for more info]\n 2) Help [${prefix}help for more info]` + "\n`\`\`js\n")
            return message.channel.send({embeds: [embed]})
        
        }
        
        
        else if(args[0].toLowerCase() === "fun") {
            var embed = new MessageEmbed()
            .setTitle('**Help Menu: [fun]**')
            .setColor(embedColor) // Set the color
            .setDescription("\n`\`\`js\n " + `1) 8ball | [${prefix} <question>]` + "\n`\`\`js\n")
            return message.channel.send({embeds: [embed]})
        
        }
        
        else {
            const embed = new MessageEmbed()
            .setColor(embedColor)
            .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL())
            .setThumbnail(client.user.displayAvatarURL())
        
            let command = client.commands.get(client.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if (!command) return message.channel.send(embed.setTitle("**Invalid Command!**").setDescription(`**Do \`${prefix}help\` For the List Of the Commands!**`))
            command = command.config
        
            embed.setDescription(stripIndents`
            ** Command -** [    \`${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}\`   ]\n
            ** Description -** [    \`${command.description || "No Description provided."}\`   ]\n
            ** Usage -** [   \`${command.usage ? `\`${command.usage}\`` : "No Usage"}\`   ]\n
            ** Examples -** [   \`${command.example ? `\`${command.example}\`` : "No Examples Found"}\`   ]\n
            ** Aliases -** [   \`${command.aliases ? command.aliases.join(" , ") : "None."}\`   ]`)
            embed.setFooter(message.guild.name, message.guild.iconURL())
        
            return message.channel.send({embeds: [embed]})
        }
            
    },
};