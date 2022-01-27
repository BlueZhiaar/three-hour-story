'use strict';
import $ from 'jquery';
import jsonObject from './episode.json';



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
 let storyNumber = 10000; //選ばれた話数を格納
 function getStoryNum(num) {
   num = getStoryCount();
   storyNumber = Math.floor(Math.random() * num);
   return storyNumber;
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
 * ある話数の範囲内でランダムな物語を返す
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
 * 引数の話数の引数のパターンを返す
 */
let SuccessOrFail;
 function getStoryResult(num,sr) {
  if(sr === 'success') {
    return jsonObject[num].success.body;
  }else if(sr === 'fail') {
    return jsonObject[num].fail.body;
  }else{
    return '不正な値です';
  }
}

/**
 * impact(精神力の増減)を返す
 * 
 */

function getImpact(stnum,sorf) {
  if(sorf === 'success'){
    return jsonObject[stnum].success.impact;
  }else if(sorf === 'fail'){
    return jsonObject[stnum].fail.impact;
  }else{
    return 'success or fail is おかしい';
  }
}

/**
 * ランダムなbodyと対応した結果を繋げて返す
 *  @param 
 */




export default function getBodyAndResult(){
  let storryChain = new Array();
  storryChain.push(getRandomStory());
  storryChain.push(storyNumber);
  storryChain.push(returnSuccessOrFail())
  storryChain.push(getStoryResult(storyNumber,storryChain[2]));
  storryChain.push(getImpact(storyNumber,storryChain[2]));
  return storryChain;
}