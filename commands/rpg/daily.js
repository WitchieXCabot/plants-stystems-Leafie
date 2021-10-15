const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "daily",
    aliases: ["day", "dayl"],
    description: "Get your daily credit",
    usage: `daily`,   
        /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run: async (bot,message, args) => {
        let amount = Math.floor(Math.random() * 500) + 100;
        let addMoney = bot.eco.daily(bot.ecoAddUser, amount);
        if (addMoney.onCooldown) return message.reply(`You have already claimed your daily credit. Come back after ${addMoney.time.hours} hours, ${addMoney.time.minutes} minutes & ${addMoney.time.seconds} seconds to claim it again.`);
        else return message.reply(`You have claimed **${addMoney.amount}** 💸 as your daily credit & now you have **${addMoney.after}** 💸.`);
    }
}