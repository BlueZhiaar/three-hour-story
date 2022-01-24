'use strict';
import $ from 'jquery';
import jsonObject from './episode.json';
const storys = JSON.parse(JSON.stringify(jsonObject));
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

setSample(getBodyAndResult());



