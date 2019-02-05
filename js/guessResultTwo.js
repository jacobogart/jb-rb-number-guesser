var correctGuessTwo = require('./correctGuessTwo');

function guessResultTwo() {
  var guessResultTwo = document.querySelector('#guess-result2');
  if (guess2 < randomNumber) {
    guessResultTwo.innerText = 'that\'s too low';
  } else if (guess2 > randomNumber) {
    guessResultTwo.innerText = 'that\'s too high';
  } else if (guess2 == randomNumber) {
    guessResultTwo.innerText = 'BOOM!';
    correctGuessTwo();
  }
}

module.exports = guessResultTwo;