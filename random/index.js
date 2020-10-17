const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log(`${client.user.username} でログインしています。`)
})

client.on('message', async msg => {
    // 自分自身の発言は無視する
    if(msg.author.bot){
        return;
    }
    if (msg.content === '!ping') {
        msg.channel.send('Pong!')
    }

    if (msg.content === '!topic') {
        msg.channel.send('random topic')
    }

    if (msg.content === 'おはよう') {
        msg.channel.send('おなかすいた')
    }
})

client.login('NzY2ODM1NjMwNTIwNzk1MjA2.X4pJVQ.ZiT2Q11JKNEBuo0M9l7V_SrvOJ0')
