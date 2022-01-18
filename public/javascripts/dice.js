'use strict';

/**
 * 一回だけダイスを振って1-9のを出す
 * @return {integer} 
 */
function dice() {
  let result;
  result = Math.floor(Math.random() * 8) +1;
  return result;
}

module.exports = dice;

