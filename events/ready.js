const client = require("../index");

client.on("ready", () =>{
    console.log(`${client.user.tag} is up and ready to go!, started with ${client.users.cache.size} users in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`)

    client.user.setActivity('L!help | Raising cute little trees', { type: 'WATCHING' });
    }
);
