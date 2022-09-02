const chewy = require('../chewy.json');
let chewyxd = new Set();
module.exports = message => {
  if (chewyxd.has(message.author.id)) {
    return;
  }
  chewyxd.add(message.author.id);
    setTimeout(() => {
    chewyxd.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(chewy.prefix)) return;
  let command = message.content.split(' ')[0].slice(chewy.prefix.length);         //chewy
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
