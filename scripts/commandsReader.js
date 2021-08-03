//rquisitando o file system do node.js
const fs = require("fs");

//Atribuido o diretório da pasta de comandos
const dir = "./commands/";

//exportando o modulo que vai ler os comandos e que recebe o prefixo
module.exports = (prefix) =>{
    //var comands inicia com uma objeto vazio mais depois do script rodar ele adere o valor dos comandos
    var commands = {};

    //aqui esta acontecendo a leitura do codigo do comando desejado
    const scripts = fs.readdirSync(dir);
    scripts.forEach(script=>{
        commands[prefix+script.split(".")[0]] = require("../"+dir+script);
    });
    
    return commands;
}