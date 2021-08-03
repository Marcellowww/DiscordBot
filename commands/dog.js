const Discord  = require('discord.js');
module.exports = (client, message) => {
    const anexo = new Discord.MessageAttachment(`https://i.imgur.com/enarCUc.jpeg`);
    message.channel.send(anexo);
       
}