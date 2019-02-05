var name1, name2, guess1, guess2;
var minRange = 1; 
var maxRange = 100;
var challengerNameOne = document.querySelectorAll('.challenger-name1');
var challengerNameTwo = document.querySelectorAll('.challenger-name2');

var generateRandomNumber = require('./generateRandomNumber');
var setRange = require('./setRange');
var makeGuess = require('./makeGuess');
var resetGame = require('./resetGame');
var clearGame = require('./clearGame');
var checkFields = require('./checkFields');
var buttonDisable = require('./buttonDisable');

// GLOBAL VARIABLES
var randomNumber = generateRandomNumber();

// ON LOAD FUNCTIONS
buttonDisable();

// EVENT LISTENERS
document.getElementById('range-update').addEventListener('click', setRange);
document.getElementById('submit-btn').addEventListener('click', makeGuess);
document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('clear-btn').addEventListener('click', clearGame);
document.querySelector('.left').addEventListener('keydown', checkFields);






