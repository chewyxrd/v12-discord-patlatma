const Discord = require('discord.js');
const client = new Discord.Client();
const chewy = require('../chewy.json');

var prefix = chewy.prefix;

const girismesaj = [
  '**Bot Sunucuya Eklendi',
  '**Chewy Bot** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Her Türlü Komudu Vardır'
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
    client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
