'use strict';
import $ from 'jquery';
import jsonObject from './episode.json';
const storys = JSON.parse(JSON.stringify(jsonObject));




function showTime() {
  let now = new Date();
  $('#time').html(now.getHours() + `:` + now.getMinutes() + ':' + now.getSeconds());
}

setInterval(showTime,1000);

function test() {
  $('#storys').html(getStory(1));
}

/**
 * 物語りの数を調べる
 */
function getStoryCount() {
  return Object.keys(jsonObject).length;
}

/**
 * 物語りの数を上限にランダムな数を返す
 * @param {integer}} num 
 * @returns {integer}
 */
let storyNumber; //話数を格納
function getStoryNum(num) {
  num = getStoryCount();
  storyNumber = num;
  return Math.floor(Math.random() * num);
}


/**
 * 引数の物語りを返す
 * @param {integer}
 * @return {string}
 */

function getStory(num) {
  return jsonObject[num].main.body;
}

/**
 * ランダムな物語を返す
 * 
 */
let storyBody;
function getRandomStory() {
  storyBody = getStory(getStoryNum(getStoryCount()));
  return storyBody;
}

/**
 * #storyに引数を表示させる
 * @param {string}
 */

function setStory(st) {
  $('#story').html(st);
}

/**
 * return success or fail
 */
function returnSuccessOrFail() {
  let num;
  num = Math.floor(Math.random() * 2);
  if(num === 1){
    return 'success'
  }else{
    return 'fail'
  }
}


/**
 * sampleに引数を表示させる
 */
function setSample(sample) {
  $('#sample').html(sample);
}

setSample(getRandomStory() + getStoryResult(1,returnSuccessOrFail()));

/**
 * 引数の話数の引数のパターンを返す
 */
function getStoryResult(num,sr) {
  if(sr === 'success') {
    return jsonObject[num].success.body;
  }else if(sr === 'fail') {
    return jsonObject[num].fail.body;
  }else{
    return '不正な値です';
  }
}


