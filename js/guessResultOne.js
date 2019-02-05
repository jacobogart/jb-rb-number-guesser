var correctGuessOne = require('./correctGuessOne');

function guessResultOne() {
  var guessResultOne = document.querySelector('#guess-result1');
  if (guess1 < randomNumber) {
    guessResultOne.innerText = 'that\'s too low';
  } else if (guess1 > randomNumber) {
    guessResultOne.innerText = 'that\'s too high';
  } else if (guess1 == randomNumber) {
    guessResultOne.innerText = 'BOOM!';
    correctGuessOne();
  }
}

module.exports = guessResultOne;