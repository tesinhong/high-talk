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
        var syugo = ["かないさん、","あやださん、","てしんさん、", "ヤマカツさん、", "岡さん、", "岸田さん、"]
        var topic = ["今日のおやつはなんですか？","ねむいです","おなかすきました", '昨日晩ご飯何食べた？', '今正直好きな子おる？', 'コロナっていつ終わるん？', 'ガッキー派？浜辺美波派？', '自慢話してみよか', '今の雰囲気にぴったりの音楽流して', '座右の名教えて', '好きな異性のタイプを詳しく教えて', '子供は何人欲しい？', '悪ガキみたいな顔してますけど今までで一番悪いことした時の話してください', 'コーラ買ってきて', 'スクワットしてみよか', "なんか暴露して", "肘みして", "前世絶対トトロやん"];

        for(let i = 0; i < 3; i++){
            msg.channel.send(syugo[Math.floor(Math.random()*syugo.length)]+topic[Math.floor(Math.random()*topic.length)])
        }
    }
})

client.login('NzY2ODM1NjMwNTIwNzk1MjA2.X4pJVQ.ZiT2Q11JKNEBuo0M9l7V_SrvOJ0')
