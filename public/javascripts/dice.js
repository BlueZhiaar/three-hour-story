'use strict';

/**
 * 一回だけダイスを振って1-9のを出す
 * @return {integer} 
 */
function onClickGetLuckButton() {
  let result;
  result = Math.floor(Math.random() * 8) +1;
  let target;
  target = document.getElementById('luck');
  target.innerHTML = '<h2>' + result + '</h2>';
}


module.exports = {
  onClickGetLuckButton: onClickGetLuckButton
};

