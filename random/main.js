var syugo = ["かないさん、","あやださん、","てしんさん、"]
var topic = ["今日のおやつはなんですか？","ねむいです","おなかすきました", '昨日晩ご飯何食べた？', '今正直好きな子おる？', 'コロナっていつ終わるん？', 'ガッキー派？浜辺美波派？', '自慢話してみよか', '今の雰囲気にぴったりの音楽流して', '座右の名教えて'];

for(let i = 0; i<3;i++){
    console.log(syugo[Math.floor(Math.random()*syugo.length)]+topic[Math.floor(Math.random()*topic.length)])

}
