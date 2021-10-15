const { Message, Client } = require("discord.js");
const config = require('../../config.json');

module.exports = {
    name: "reload",
    aliases: ['load'],
    description: "Reloads a command",
    usage: `reload`, 
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (message.author.id !== config.admins) {
            return;
        }
    
        if(!args[0]) return message.reply(`Provide the category & commands to reload !! \`!}reload [Category] [Command]\``)
        if(!args[1]) return message.reply(`Provide a command to reload !! \`!reload [Category] [Command]\``)
    
        let category = args[0].toLowerCase()
        let command = args[1].toLowerCase()
    
        try {
            delete require.cache[require.resolve(`../../Commands/${category}/${command}.js`)];
            client.commands.delete(command);
    
            const pull = require(`../../Commands/${category}/${command}.js`)
            client.commands.set(command, pull)
    
            return message.channel.send(`Reloaded Command: **\`${command}\`**`)
    
        } catch (error) {
            return message.reply(`Cannot reload **\`${command}\`**\`\`\`${error}\`\`\``)
        }
    
        }
};