'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const Characterdata = require('../models/characterdata');
const uuid = require('uuid');
let kouunti;

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
  res.redirect('/new/' + characterId);
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

module.exports = router;