'use strict';
import $ from 'jquery';
let jsonObject;


function showTime() {
  let now = new Date();
  $('#time').html(now.getHours() + `:` + now.getMinutes() + ':' + now.getSeconds());
}

setInterval(showTime,1000);

/**
 * 話数を返す
 * @param {json} 
 * @return {integer}
 */

function countStorys() {
  return Object.keys(jsonObject).values;
}



