'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const Characterdata = require('../models/characterdata');
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

router.get('/:characterId', authenticationEnsurer,(req,res,next) => { 
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
      users: [req.user],
      firstact:'あなたは出発した。',
      
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




/**
 * 経過ミリ秒を入れると10分で割った回数を返す
 * @param {integer}
 * @return {integer}
 */
function getStoryCount(elapsedmilliseconds) {
  return Math.floor(elapsedmilliseconds / 1000 / 60 /10);
}

/**
 * 現在時刻を表示する
 */



module.exports = router;