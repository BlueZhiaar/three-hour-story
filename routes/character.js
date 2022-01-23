'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const Characterdata = require('../models/characterdata');
const Episodelog = require('../models/episodelog');
const uuid = require('uuid');
let kouunti;
const User = require('../models/user');

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
let intervalTime = 1000;

router.get('/:characterId', authenticationEnsurer, (req, res, next) =>{
  getStorys();
  Episodelog.create({
    episode_body: storyArray,
    status: 0,
    character_id: req.params.characterId
  }).then((story) => {
    res.render('nowchara')
    
    
  })
})

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

function getRandomStoryNum() {
  return Math.floor(Math.random() * getStoryCount());
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
let storyArray = new Array();
let limit = 18;
function getStorys() {
  for(let i = 0; i < limit ; i++) {
    storyArray.push(getStory());
  }
}

//TODO 時間によって配列の表示数を変える

//updatedAtを引数に入れると18回10分を足した時間を配列に入れる


/**
 * ミリ秒を受け取って〇時〇分の形に直す
 */





module.exports = router;