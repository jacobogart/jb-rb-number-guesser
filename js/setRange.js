// SET RANGE
var generateRandomNumber = require('./generateRandomNumber');
var clearGame = require('./clearGame');
var rangeCheck = require('./rangeCheck');

function setRange(evt) {
  minRange = parseInt(document.getElementById('min-range').value) || '';
  maxRange = parseInt(document.getElementById('max-range').value) || '';
  if (!rangeCheck()) {
    clearGame();  
  } else {
    randomNumber = generateRandomNumber(minRange, maxRange);
  if (document.getElementById('min-range').value === '') {
    minRange = 1;
  }
  if (document.getElementById('max-range').value === '') {
    maxRange = 100;
  }
    document.getElementById('display-min').innerText = minRange;
    document.getElementById('display-max').innerText = maxRange;
  }
}

module.exports = setRange;