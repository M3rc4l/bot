const { MessageEmbed } = require('discord.js')
exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Devi essere nel canale vocale per usare questo comando!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed:{
            title: 'Niente in riproduzione in questo momento'
        }
    })
    message.channel.send({
        embed:{
            title: 'In riproduzione',
            description: queue.songs[0].title + ' Requested By: ' + '<@' + queue.songs[0].requester + '>',
            color: 'YELLOW',
            thumbnail: queue.songs[0].thumbnail
        }
    })
}