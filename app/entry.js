'use strict';
import $ from 'jquery';
import getBodyAndResult from './story-controller';




function showTime() {
  let now = new Date();
  $('#time').html(now.getHours() + `:` + now.getMinutes() + ':' + now.getSeconds());
}

setInterval(showTime,1000);


/**
 * sampleに引数を表示させる
 */
function setSample(sample) {
  $('#sample').html(sample);
}



//0:物語りbody1:luckll2:success or fail 3: bodyの結果 4:impact


//setSample(hensuu);
//setSample((getBodyAndResult()[0] + getBodyAndResult()[3] + '精神力増減:' + getBodyAndResult()[4]));

/**
 * getBodyAndResultを18回繰り返してallStoryChainに多次元配列にする
 */

let limit = 24;
let allStoryChain = new Array();
function setAllStoryChain(){
  for (let i = 0; i < limit; i++){
    allStoryChain.push(getBodyAndResult());
  }
}
/**
 * サーバーからcreatedatを取得する
 * res.json({episode_body: storyArray,character_id: req.params.characterId});
 */

 


//setAllStoryChain();
//console.table(allStoryChain);

/**
 * 配列を順々に表示させる
 */

/*
function appendStory() {
  
    let i = 0;

    const timer = setInterval(() => {
      $('#storys').append(`<p>${allStoryChain[i]}</p>`);

      i++;

      if(i === limit){
        clearInterval(timer);
      }
    }, 1500);
    
    

}
*/



/** 
 * episode_body: storyArray,
    status: 0,
    character_id: req.params.characterId
*/

//appendStory();








