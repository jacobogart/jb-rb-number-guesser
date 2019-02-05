var updateName = require('./updateName');
var updateGuess = require('./updateGuess');
var guessResultOne = require('./guessResultOne');
var guessResultTwo = require('./guessResultTwo');

// GUESS RESULTS
function makeGuess(evt) {
  updateName();
  updateGuess(evt);
  guessResultOne();
  guessResultTwo();
}

module.exports = makeGuess;