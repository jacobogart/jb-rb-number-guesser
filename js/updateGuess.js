
var guessWithinRange = require('./guessWithinRange');
var buttonDisable = require('./buttonDisable');
var clearGame = require('./clearGame');

function updateGuess(evt) {
  guess1 = document.querySelector('#guess1').value;
  guess2 = document.querySelector('#guess2').value;
  if (!guessWithinRange(evt)) {
    evt.preventDefault();
    clearGame();  
    console.log('test2');
  } else {
    var challengerGuessOne = document.querySelector('#current-guess1');
    challengerGuessOne.innerText = guess1;
    var challengerGuessTwo = document.querySelector('#current-guess2');
    challengerGuessTwo.innerText = guess2;
  }
  buttonDisable(); 
}

module.exports = updateGuess;