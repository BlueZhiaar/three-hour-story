'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const Characterdata = require('../models/characterdata');
const uuid = require('uuid');
let kouunti;
const User = require('../models/user');
const nowDate = new Date();
const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./storys/episode.json','utf-8'));


router.get('/new', authenticationEnsurer, (req,res,next) => {
  kouunti = saikoro();
  res.render('new', {user:req.user, luck: kouunti});
});

router.post('/', authenticationEnsurer, (req,res,next) => {
  console.log(req.body); //TODO　キャラ名と方針と幸運値を保存する実装をする
  const characterId = uuid.v4();
  const updatedAt = new Date();
  Characterdata.create({
    character_id: characterId,
    character_name: req.body.charaName,
    story_chain: 'sample',
    policy: req.body.policy,
    luck: kouunti,
    createdBy: req.user.id,
    updatedAt: updatedAt,
    status_chain: 'sample',
    ending: 'sample'
  }).then((character) => {
    console.log(req.body);
  })
  //TODO 幸運値ダイスを作る
  res.redirect('/character/' + characterId);
});

router.get('/:characterId', authenticationEnsurer,(req,res,next) => {
  repeatGetStory();
  Characterdata.findOne({
    include: [
      {
        model: User,
        attributes: ['user_id','user_name']
      }
    ],
    where: {
      character_id: req.params.characterId
    },
  }).then((characterdata)=> {
    res.render('nowchara' , {
      user:req.user,
      characterdata: characterdata,
      milli_second: characterdata.updatedAt.getTime(),
      elapsed_milli_second: abs(nowDate.getTime() - characterdata.updatedAt.getTime()),
      elapsed_hours_minutes: getHoursMinutes(abs(nowDate.getTime() - characterdata.updatedAt.getTime())),
      storys: storyArray,
      users: [req.user]
      
    });
  });
});

/**
 * 1-9の値を返す
 * @return {integer}
 */

function saikoro() {
  let result;
  result = Math.floor(Math.random() * 8) + 1;
  return result;
}

/**
 * マイナスをとる
 */
function abs(millisecond) {
  return Math.abs(millisecond);
}

/**
 * ミリ秒を受け取って〇時間〇分の形に直す
 * @param {integer}
 * @return {string}
 */
function getHoursMinutes(milliseconds) {
  let sec = Math.floor(milliseconds / 1000);
  let minutes = sec / 60;
  let hours = Math.floor(minutes / 60);
  let remainminutes = Math.floor(minutes % 60);

  return `${hours}時間${remainminutes}分${sec}秒`;
}


/**
 * 番号を引数に入れると本文bodyを返す
 * @param {integer}
 * @return {string}
 */
 function getMainBody(num) {
  return jsonObject[num].main.body;
}

/**
 * storyの数を返す
 */

function getStoryCount() {
  return Object.keys(jsonObject).length;
}

/**
 * storyの数の中からランダムな話数を返す
 */

function getRandomStoryNum() {
  return Math.floor(Math.random() * getStoryCount());
}

/**
 * sotryの中からランダムな話を返す
 */

function getStory(){
  return getMainBody(getRandomStoryNum());
}

console.log(getStory());

/**
 * getStory()を指定回数繰り返し実行して配列に格納する
 */
let storyArray = new Array();

function repeatGetStory(){
  let limit = 18;
  for(let i = 0; i < limit; i++) {
    storyArray.push(getStory());
  }
}




module.exports = router;