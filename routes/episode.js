'use strict';
const express = require('express');
const router = express.Router();
const authenticationEnsurer = require('./authentication-ensurer');
const fs = require('fs');
const jsonObject = JSON.parse(fs.readFileSync('./storys/episode.json','utf-8'));

//console.log(jsonObject);


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

module.exports = router;
 

