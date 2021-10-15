const { MessageEmbed } = require('discord.js');
const { embedColor } = require('../../config.json');

module.exports = {
config: {
    name: "bal",
    aliases: ["money", "credits", "balance"],
    description: "Gives your ballance",
    usage: `bal`,   
},
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let userBalance = client.eco.fetchMoney(user.id);
        const embed = new MessageEmbed()
            .setTitle(`Balance`)
            .addField(`User`, `<@${userBalance.user}>`)
            .addField(`Balance`, `${userBalance.amount} 💸`)
            .addField(`Position`, userBalance.position)
            .setColor(embedColor)
            .setThumbnail(user.displayAvatarURL)
            .setTimestamp();
        return message.channel.send({embeds: [embed]});
    }
}