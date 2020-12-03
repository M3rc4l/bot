exports.run = async(client, message) => {
    message.channel.send({
        embed: {
            title: 'Help',
            description: `
            +play <songName> - Fa partire una canzone
            +pause - ferma la canzone
            +resume - riparte la canzone
            +np - Info della canzone in riproduzione
            +skip - Passa alla prossima canzone
            +stop - Ferma la canzone in riproduzone
            +volume <value> - imposta volume selezionato
            +queue - fa vedere la coda
            `,
            color: 'GREEN'
        }
    })
}
