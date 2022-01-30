'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');

const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true});
const Characterdata = require('../models/characterdata');
const Episodelog = require('../models/episodelog');
const uuid = require('uuid');
let kouunti;
const User = require('../models/user');

const {JSDOM} = require("jsdom");
const {window} = new JSDOM("");
const $ = require("jquery")(window);

const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./storys/episode.json','utf-8'));
const endingObject = JSON.parse(fs.readFileSync('./storys/ending.json','utf-8'));

router.get('/new', authenticationEnsurer, csrfProtection,(req,res,next) => {
  kouunti = saikoro();
  res.render('new', {user:req.user,csrfToken: req.csrfToken() });
});

let episodeBody;

function OnButtonClick() {
  episodeBody =  getJsonStorys();
}

router.post('/', authenticationEnsurer, csrfProtection,(req,res,next) => {
  console.log(req.body); //TODO　キャラ名と方針と幸運値を保存する実装をする
  const characterId = uuid.v4();
  const updatedAt = new Date();
  //episodeBody =  getJsonStorys();
  Characterdata.create({
    character_id: characterId,
    character_name: req.body.charaName,
    story_chain: 'sample',
    policy: 'sample',
    luck: 0,
    createdBy: req.user.id,
    updatedAt: updatedAt,
    status_chain: 'sample',
    ending: 'sample'
  }).then((data) => {
    
  }).catch((err) => {
    console.log(err);
  })
  //TODO 幸運値ダイスを作る
  res.redirect('/character/' + characterId);
});
let cn;
router.get('/:characterId', authenticationEnsurer, (req, res, next) =>{
  //let episodeBody = getJsonStorys();
  Characterdata.findOne({
    where: {
      character_id: req.params.characterId
    }
  }).then(chara => {
    console.table(chara);
    cn = chara.character_name;
  })
  Episodelog.create({
    episode_body: episodeBody,
    status: 0,
    character_id: req.params.characterId
  }).then((episodedatas) => {
    //console.table(episodedatas.episode_body[1][0] + episodedatas.episode_body[1][2]);
    let sampleArray = new Array();
    let mentalStatus = 0;
for(let i = 1; i < limit + 1; i++) {
  mentalStatus = mentalStatus + parseInt(episodedatas.episode_body[i][3]);
  sampleArray.push(episodedatas.episode_body[i][0] + episodedatas.episode_body[i][2] + '結果:現在の精神力は' + mentalStatus);
}
sampleArray.push(returnEnding(mentalStatus));

Episodelog.update({
  episode_body: sampleArray
},
{
  where: { character_id : episodedatas.character_id} 
}).then(() => {
  res.render('nowchara',{
    episodedatas:episodedatas,
    episode_bodys:sampleArray,
    cn: cn
  });

})

    
  })
    

  }) 
let episodedata;
  router.get('/:characterId/archive',authenticationEnsurer,function (req,res,next) {
    Episodelog.findOne({
      where: { character_id: req.params.characterId }
    }).then(data => {
      episodedata = data.episode_body
    }).then(() => {
      res.render('archive',{ episodedatas: episodedata });
    })

  })
//倒れてる人がいた,fail,関わりたくなかったのでそのまま通り過ぎた,-1 episode_body


/**
 * 
 * endingObjectの長さを返す
 */
function returnObjLength(obj) {
  return Object.keys(obj).length;
}

/**
 * endingの上から順に値を見て、n値（その時のmental）以下だったらそのendingを返す。
 */
function returnEnding(n){
  let num = returnObjLength(endingObject);
  let aStory = new Array();
  let mentalArray = new Array();
  for(let i = 0;i < num;i++){ //配列に読み込み
    aStory.push(endingObject[i].ending);
    mentalArray.push(parseInt(endingObject[i].mental));
  }

  for(let i = 0; i < num; i++){
    if(mentalArray[i] <= n){
      return endingObject[i].ending;
    }
  }
}

//endingObject[0].ending;

/**
 * const timer = setInterval(() => {
        res.render('nowchara',{ routesample: episodeBody[i][0] } );
        i++;
        if(i == episodeBody.length){
          clearInterval(timer);
        }
      }, 1000);
 * 
 * ending_log_id: {
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    episode_body: {
      type:DataTypes.JSON,
      allowNull: false
    },
    status:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    character_id:{
      type:DataTypes.UUID,
      allowNull:false
    }
 * 
 */


/**
 * 1-9の値を返す
 * @return {integer}
 */

function saikoro() {
  let result;
  result = Math.floor(Math.random() * 8) + 1;
  return result;
}

//話数を数える


function getStoryCount() {
  return Object.keys(jsonObject).length;
}

/**
 * storyの数の中からランダムな話数を返す
 */

let wasuu;
function getRandomStoryNum() {
  wasuu = Math.floor(Math.random() * getStoryCount());
  return wasuu;
}

/**
 * ランダムにsuccess or fail return
 *  
 * 
 * */

function returnSuccessOrFail() {
  let num = Math.floor(Math.random() * 9);

  if(num < 5) {
    return 'success';
  } else {
    return 'fail';
  }
}

/**
 * 結果を含めた物語りをjson煮詰める
 * 
 */
 let storyArray = new Array();
 let storyChain = new Array([]);
 //let storyJsonData = JSON.stringify(storySampleData);
function returnStoryChain(){
  //getStory();
  getRandomStoryNum();
  let sorf = returnSuccessOrFail();
  storyArray.push(jsonObject[wasuu].main.body);
  
  if(sorf === 'success') {
    storyArray.push(sorf);
    storyArray.push(jsonObject[wasuu].success.body);
    storyArray.push(jsonObject[wasuu].success.impact);
   return storyArray;
    
  }else if(sorf === 'fail'){
    storyArray.push(sorf);
    storyArray.push(jsonObject[wasuu].fail.body);
    storyArray.push(jsonObject[wasuu].fail.impact);
   return storyArray;
    
  } else{
    return '不正な値です';
  }
}




/**
 * sotryの中からランダムな話を返す
 
*/
function getStory() {
  return jsonObject[getRandomStoryNum()].main.body;
}

/**
 * limit回getStoryを実行して配列に格納する
 */
let limit = 18;
function getJsonStorys() {
  for(let i = 0; i < limit ; i++) {
    storyChain.push(returnStoryChain());
    storyArray = [];
  }
  return storyChain;
}

//TODO 時間によって配列の表示数を変える

//updatedAtを引数に入れると18回10分を足した時間を配列に入れる


/**
 * ミリ秒を受け取って〇時〇分の形に直す
 */





module.exports = router;