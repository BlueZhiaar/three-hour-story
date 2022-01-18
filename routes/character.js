'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');

router.get('/new', authenticationEnsurer, (req,res,next) => {
  console.log('character.jsのgetは通ってる');
  res.render('new', {user:req.user});
});

router.post('/', authenticationEnsurer, (req,res,next) => {
  console.log(req.body); //TODO　キャラ名と方針と幸運値を保存する実装をする
  //TODO 幸運値ダイスを作る
  res.redirect('/');
});

module.exports = router;