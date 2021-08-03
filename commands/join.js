
module.exports = async(client, message) => {
    if(!message.guild) return;
    if(message.member.voice.channel){
        const connection = await message.member.voice.channel.join();
    }else{
        message.reply(`Voce precisa estar conectado no canal de voz`);
    }
}