//requisitando modulos e clases das bibliotecas, node e modulos de script
const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const config = require('./config.json');
const commands = require('./scripts/commandsReader.js')(config.prefix);

console.log(commands);

client.on("ready", () => {
    console.log(`Estou online (${client.user.tag})`);
});

client.on("message", (message) => {
    if (message.author.bot == true) return;
    if (message.channel.type == "dm") return;


    //args vai ser uma lista que contem o conteudo da mensagem separada por espaços
    const args = message.content.split(" ");
    //pegando o primeiro item da lista args que tem que ser o comando
    if (commands[args[0]]) commands[args[0]](client, message);
})

let logEntrada = null;

client.on("message", (message) => {
    if (message.content == ">logEntrada") {
        message.reply('Canal selecionado para Log de entrada');
        return logEntrada = message.channel.name;
    }

});

client.on("guildMemberAdd", member => {
    const canal = member.guild.channels.cache.find(ch => ch.name === logEntrada);
    if (!canal) return;

    canal.send(`Seja bem viado ${member}`);

});

client.login(config.token);

