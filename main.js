var randomNumber = generateRandomNumber();
var name1, name2, guess1, guess2;

function setRange() {
  var minRange = parseInt(document.getElementById('min-range').value);
  var maxRange = parseInt(document.getElementById('max-range').value);
  randomNumber = generateRandomNumber(minRange, maxRange);
  document.getElementById('display-min').innerText = minRange;
  document.getElementById('display-max').innerText = maxRange;
}

function generateRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('submit-btn').addEventListener('click', makeGuess);

function updateName() {
  name1 = document.querySelector('#name1').value;
  name2 = document.querySelector('#name2').value;
  var challengerNameOne = document.querySelectorAll('.challenger-name1');
  for (var i = 0; i < challengerNameOne.length; i++) {
    challengerNameOne[i].innerText = name1;
  }
  var challengerNameTwo = document.querySelectorAll('.challenger-name2');
  for (var i = 0; i < challengerNameTwo.length; i++) {
    challengerNameTwo[i].innerText = name2;
  }
}

function updateGuess() {
  guess1 = document.querySelector('#guess1').value;
  guess2 = document.querySelector('#guess2').value;
  var challengerGuessOne = document.querySelector('#current-guess1');
    challengerGuessOne.innerText = guess1;
  var challengerGuessTwo = document.querySelector('#current-guess2');
    challengerGuessTwo.innerText = guess2;  
}

function guessResultOne() {
  var guessResultOne = document.querySelector('#guess-result1');

  if (guess1 < randomNumber) {
    guessResultOne.innerText = 'that\'s too low';
  } else if (guess1 > randomNumber) {
    guessResultOne.innerText = 'that\'s too high';
  } else if (guess1 == randomNumber) {
    correctGuess();
  }
}


function makeGuess() {
  updateName();
  updateGuess();
  guessResultOne();
  console.log(randomNumber)
}

function isNumberKey(evt){
  var char = evt.key;

  if (char === 'Backspace' || char === 'Tab' || parseInt(char)) {
    console.log('You can use that key!');
    return true;
  }
  evt.preventDefault();
  console.log('You can\'t use that key!');
  return false;
}

var numberOnlyFields = document.querySelectorAll('.numeric-only');

for (var i = 0; i < numberOnlyFields.length; i++) {
  numberOnlyFields[i].addEventListener('keydown', isNumberKey);
}

