const Discord = require('discord.js')
const twitter = require('twitter');
const fs = require('fs');
const request = require('request')
const cheerio = require('cheerio')

const client = new Discord.Client()

const twclient = new twitter({
    consumer_key: "o67nD9VZa8BwblGjUiDmJlX3F",
    consumer_secret: "xWcwsLj2Cx2u6olOUjUV8r0j9kLkZfDBUViVI87uV0GTza1oE8",
    access_token_key: "1205911520820916224-dv6Dq0r7zB89opKJlso3FjTkwM7jGE",
    access_token_secret: "7B9oPOdfcJPS0cP806Q48ltcdJuZ46NiY683YxK4yWRVe"
});
 
const params = {
    id: 23424856
};

client.on('ready', () => {
    console.log(`${client.user.username} でログインしています。`)
})

client.on('message', async msg => {
    // 自分自身の発言は無視する
    if(msg.author.bot){
        return;
    }
    // テスト用
    if (msg.content === '!ping') {
        msg.channel.send('Pong!')
    }

    // ex) !random 5
    if (msg.content.startsWith('話題')) {
        let num = msg.content.split(" ")[1]
        if(num == null) {
           num = 3 
        }

        console.log(num)
        msg.channel.send('random topic: '+num+" 件")
        var syugo = ["かないさん、","あやださん、","てしんさん、", "ヤマカツさん、", "岡さん、", "岸田さん、"]
        var topic = ["今日のおやつはなんですか？","ねむいです","おなかすきました", '昨日晩ご飯何食べた？', '今正直好きな子おる？', 'コロナっていつ終わるん？', 'ガッキー派？浜辺美波派？', '自慢話してみよか', '今の雰囲気にぴったりの音楽流して', '座右の名教えて', '好きな異性のタイプを詳しく教えて', '子供は何人欲しい？', '悪ガキみたいな顔してますけど今までで一番悪いことした時の話してください', 'コーラ買ってきて', 'スクワットしてみよか', "なんか暴露して", "肘みして", "前世絶対トトロやん", "マック派？マクド派？"];

        for(let i = 0; i < num; i++){
            msg.channel.send(syugo[Math.floor(Math.random()*syugo.length)]+topic[Math.floor(Math.random()*topic.length)])
        }
    }

    // twitter のトレンドを取得
    if (msg.content.startsWith('トレンド')) {
        msg.channel.send("**twitter trend**")
        twclient.get('trends/place', params).then(function(res){
            //トレンドをJson形式で取得
            var json = JSON.stringify(res,undefined,2);
            JSON.parse(json, function(key, value){
                if(key=="name"){
                    //トレンド名の取得
                    console.log(value)
                    msg.channel.send(value)
                }
            });
        }).catch(function(err){
            console.log(err);
        });
    }

    // yahoo ニュースをスクレイピング 
    if (msg.content.startsWith('ニュース')) {
        request('https://news.yahoo.co.jp/', (e, response, body) => {
        if (e) {
            console.error(e)
        }

        try {
            const $ = cheerio.load(body)
            const topics = $('.topicsListItem').children("a")
            topics.each(function(){
                console.log($(this).text());
                // msg.channel.send($(this).text())
                msg.channel.send($(this).attr().href)
            });
        } catch (e) {
            console.error(e)
        }
        })
    }
    if (msg.content === 'おはよう') {
        msg.channel.send('おなかすいた')
    }
    if　(msg.content.match('/にゃーん/')){
        msg.channel.send('にゃにゃにゃにゃ〜ん')
    }


})

client.login('NzY2ODM1NjMwNTIwNzk1MjA2.X4pJVQ.ZiT2Q11JKNEBuo0M9l7V_SrvOJ0')
