exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
    if (!channel) return message.channel.send('Neccessario unirsi ad canale vocale per usare questo comando!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Niente da riprendere!'
        }
    })
    if(queue.playing !== false)
    queue.connection.dispatcher.resume()
    message.react('▶')
    message.channel.send('Canzone ripresa!')
}