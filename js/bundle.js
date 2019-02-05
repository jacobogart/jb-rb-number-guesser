(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//var isAlphaNumeric = require('./isAlphaNumeric');
var isNumber = require('./isNumber');

// ERROR FUNCTIONS
function addError(element) {
  var icon = `<img src="images/error-icon.svg" alt="error icon" width="20px"/>`;
  element.classList.add('error');
  element.nextElementSibling.classList.remove('hidden');
  var num = parseInt(element.value);
  if (element.classList.contains('numeric-only') && !isNumber(element.value)) {
    element.nextElementSibling.innerHTML = icon + 'Enter a number';
  } else if (element.classList.contains('guess') && num > maxRange) {
    element.nextElementSibling.innerHTML = icon + 'Number too high';
  } else if (element.classList.contains('guess') && num < minRange) {
    element.nextElementSibling.innerHTML = icon + 'Number too low';
  }
}

module.exports = addError;
},{"./isNumber":12}],2:[function(require,module,exports){
function buttonDisable() {
  if (document.querySelector('#name1').value === '') {
    document.getElementById("reset-btn").disabled = true;
  } else {
    document.getElementById("reset-btn").disabled = false;
  }

  if (document.querySelector('#guess1').value === '') {
    document.getElementById("clear-btn").disabled = true;
  } else {
    document.getElementById("clear-btn").disabled = false;
  }
}

module.exports = buttonDisable;
},{}],3:[function(require,module,exports){
var isAlphaNumeric = require('./isAlphaNumeric');
var isNumber = require('./isNumber');
var removeErrorClass = require('./removeErrorClass');
var addError = require('./addError');

function checkFields(e) {
  if (e.target.classList.contains('numeric-only') && isNumber(e.key)) {
    removeErrorClass(e.target);
  } else if (e.target.classList.contains('name') && isAlphaNumeric(e.key)) {
    removeErrorClass(e.target);
  } else {
    e.preventDefault();
    addError(e.target);
  }
}

module.exports = checkFields;
},{"./addError":1,"./isAlphaNumeric":11,"./isNumber":12,"./removeErrorClass":16}],4:[function(require,module,exports){
function clearGame() {
  document.querySelector('#guess1').value = '';
  document.querySelector('#guess2').value = '';
}

module.exports = clearGame;
},{}],5:[function(require,module,exports){
function correctGuessOne() {
  var right = document.querySelector('.right');
  right.innerHTML += `<div class="winner-card">
        <div class="flex jc-center top-line">
          <h3 class="bold challenger-1">
            ${name1}
          </h3>
          <p class="vs">
            VS
          </p>
          <h3 class="bold challenger-2">
            ${name2}
          </h3>
        </div>
        <hr />
        <div class="middle-line">
          <h2 class="bold winner-name">
            ${name1}
          </h2>
          <h2 class="winner">
            Winner
          </h2>
        </div>
        <hr />
        <div class="flex jc-space-between bottom-line">
          <h3 class="guesses">
            <span class="bold guesses-number">47</span>
            Guesses
          </h3>
          <h3 class="minutes">
            <span class="bold minutes-number">1.35</span>
            Minutes
          </h3>
          <img class="delete-btn" src="images/icons8-cancel-2.svg" alt="delete card button" />
        </div>
      </div>`
}

module.exports = correctGuessOne;
},{}],6:[function(require,module,exports){
function correctGuessTwo() {
  var right = document.querySelector('.right');
  right.innerHTML += `<div class="winner-card">
        <div class="flex jc-center top-line">
          <h3 class="bold challenger-1">
            ${name1}
          </h3>
          <p class="vs">
            VS
          </p>
          <h3 class="bold challenger-2">
            ${name2}
          </h3>
        </div>
        <hr />
        <div class="middle-line">
          <h2 class="bold winner-name">
            ${name2}
          </h2>
          <h2 class="winner">
            Winner
          </h2>
        </div>
        <hr />
        <div class="flex jc-space-between bottom-line">
          <h3 class="guesses">
            <span class="bold guesses-number">47</span>
            Guesses
          </h3>
          <h3 class="minutes">
            <span class="bold minutes-number">1.35</span>
            Minutes
          </h3>
          <img class="delete-btn" src="images/icons8-cancel-2.svg" alt="delete card button" />
        </div>
      </div>`
}

module.exports = correctGuessTwo;
},{}],7:[function(require,module,exports){
function generateRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = generateRandomNumber;
},{}],8:[function(require,module,exports){
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
},{"./correctGuessOne":5}],9:[function(require,module,exports){
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
},{"./correctGuessTwo":6}],10:[function(require,module,exports){
var addError = require('./addError');

function guessWithinRange(evt) {
  if (guess1 < minRange || guess1 > maxRange) {
    evt.preventDefault();
    addError(evt.path[2].querySelector('#guess1'));    
  } 

  if (guess2 < minRange || guess2 > maxRange) {
    evt.preventDefault();
    addError(evt.path[2].querySelector('#guess2'));
  } else {
    return true;
  }
}

module.exports = guessWithinRange;
},{"./addError":1}],11:[function(require,module,exports){
function isAlphaNumeric(char){
  var regex = /[\W]/;
  if (char === 'Backspace' || char === 'Tab' || char === ' ' || !regex.test(char)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAlphaNumeric;
},{}],12:[function(require,module,exports){
function isNumber(char){
  var regex = /[\d]/;
  if (char === 'Backspace' || char === 'Tab' || regex.test(char)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isNumber;
},{}],13:[function(require,module,exports){
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







},{"./buttonDisable":2,"./checkFields":3,"./clearGame":4,"./generateRandomNumber":7,"./makeGuess":14,"./resetGame":17,"./setRange":18}],14:[function(require,module,exports){
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
},{"./guessResultOne":8,"./guessResultTwo":9,"./updateGuess":19,"./updateName":20}],15:[function(require,module,exports){
var addError = require('./addError');

function rangeCheck() {
  if (minRange == '' || maxRange == '') {
    addError(document.getElementById('min-range'));
    addError(document.getElementById('max-range'));
  }  

  if (maxRange < minRange) {
    addError(document.getElementById('max-range'));
  } else {
    return true;
  }
}

module.exports = rangeCheck;
},{"./addError":1}],16:[function(require,module,exports){
function removeErrorClass(element) {
  element.classList.remove('error');
  element.nextElementSibling.classList.add('hidden');
}

module.exports = removeErrorClass;
},{}],17:[function(require,module,exports){
var generateRandomNumber = require('./generateRandomNumber');

// GAME RESETS
function resetGame() {
  for (var i = 0; i < challengerNameOne.length; i++) {
    challengerNameOne[i].innerText = 'Challenger 1';
  }
  for (var i = 0; i < challengerNameTwo.length; i++) {
    challengerNameTwo[i].innerText = 'Challenger 2';
  }
  document.querySelector('#name1').value = '';
  document.querySelector('#name2').value = '';
  document.querySelector('#guess1').value = '';
  document.querySelector('#guess2').value = '';
  document.querySelector('#guess-result1').innerText = '';
  document.querySelector('#guess-result2').innerText = '';
  document.querySelector('#current-guess1').innerText = '-';
  document.querySelector('#current-guess2').innerText = '-';
  randomNumber = generateRandomNumber(minRange, maxRange);
}

module.exports = resetGame;
},{"./generateRandomNumber":7}],18:[function(require,module,exports){
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
},{"./clearGame":4,"./generateRandomNumber":7,"./rangeCheck":15}],19:[function(require,module,exports){

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
},{"./buttonDisable":2,"./clearGame":4,"./guessWithinRange":10}],20:[function(require,module,exports){
var challengerNameOne = document.querySelectorAll('.challenger-name1');
var challengerNameTwo = document.querySelectorAll('.challenger-name2');
var buttonDisable = require('./buttonDisable');

// GAME SETUP
function updateName() {
  name1 = document.querySelector('#name1').value;
  name2 = document.querySelector('#name2').value;
  for (var i = 0; i < challengerNameOne.length; i++) {
    challengerNameOne[i].innerText = name1;
  }
  for (var i = 0; i < challengerNameTwo.length; i++) {
    challengerNameTwo[i].innerText = name2;
  }
  buttonDisable();
}

module.exports = updateName;
},{"./buttonDisable":2}]},{},[13]);
