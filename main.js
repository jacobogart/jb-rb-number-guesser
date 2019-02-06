// GLOBAL VARIABLES
var randomNumber = generateRandomNumber();
var name1, name2, guess1, guess2;
var minRange = 1; 
var maxRange = 100;
var challengerNameOne = document.querySelectorAll('.challenger-name1');
var challengerNameTwo = document.querySelectorAll('.challenger-name2');
var numberFields = document.querySelectorAll('.numeric-only');
var nameFields = document.querySelectorAll('.name');

// ON LOAD FUNCTIONS
buttonDisable();

// EVENT LISTENERS
document.getElementById('submit-btn').addEventListener('click', makeGuess);
document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('clear-btn').addEventListener('click', clearGame);
document.querySelector('.right').addEventListener('click', deleteCard);
for (var i = 0; i < numberFields.length; i++) {
  numberFields[i].addEventListener('keydown', isNumberKey);
}
for (var i = 0; i < nameFields.length; i++) {
  nameFields[i].addEventListener('keydown', isAlphaNumeric);
}

// SET RANGE
function setRange(evt) {
  minRange = parseInt(document.getElementById('min-range').value) || '';
  maxRange = parseInt(document.getElementById('max-range').value) || '';
  if (!rangeCheck()) {
    clearGame()  
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

function generateRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
  buttonDisable()
}

function updateGuess(evt) {
  guess1 = document.querySelector('#guess1').value;
  guess2 = document.querySelector('#guess2').value;
  if (!guessWithinRange(evt)) {
    evt.preventDefault();
    clearGame()  
  } else {
    var challengerGuessOne = document.querySelector('#current-guess1');
    challengerGuessOne.innerText = guess1;
    var challengerGuessTwo = document.querySelector('#current-guess2');
    challengerGuessTwo.innerText = guess2;
  }
  buttonDisable(); 
}

// GUESS RESULTS
function makeGuess(evt) {
  updateName();
  updateGuess(evt);
  guessResultOne();
  guessResultTwo();
  console.log(randomNumber);

}

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

function correctGuessOne() {
  expandRange();
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
  right.insertBefore(winnerCardOne, right.childNodes[0]);
}

function correctGuessTwo() {
  expandRange();
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

  right.insertBefore(winnerCardTwo, right.childNodes[0]);
}

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
  buttonDisable();

}

function clearGame() {
  document.querySelector('#guess1').value = '';
  document.querySelector('#guess2').value = '';
  buttonDisable();
}

function buttonDisable() {
  if (document.querySelector('#name1').value === '') {
    document.getElementById("reset-btn").disabled = true;
    document.getElementById("reset-btn").classList.add('disabled');
  } else {
    document.getElementById("reset-btn").disabled = false;
    document.getElementById("reset-btn").classList.remove('disabled');
  }

  if (document.querySelector('#guess1').value === '') {
    document.getElementById("clear-btn").disabled = true;
    document.getElementById("clear-btn").classList.add('disabled');
  } else {
    document.getElementById("clear-btn").disabled = false;
    document.getElementById("clear-btn").classList.remove('disabled');
  }
}

// ERROR FUNCTIONS
function addErrorClass(element) {
  var icon = `<img src="images/error-icon.svg" alt="error icon" width="20px"/>`
  element.classList.add('error');
  element.nextElementSibling.classList.remove('hidden');
  console.log(element.classList.contains('name'));
  if (arguments.callee.caller.name == 'isNumberKey') {
    element.nextElementSibling.innerHTML = icon + 'Enter a number';
  } else if (element.classList.contains('name')) {
    element.nextElementSibling.innerHTML = icon + 'Enter a name';
  } else if (arguments.callee.caller.name == 'guessWithinRange' && guess1 == '') {
    element.nextElementSibling.innerHTML = icon + 'Enter a number';
  } else if (arguments.callee.caller.name == 'guessWithinRange' && guess2 == '') {
    element.nextElementSibling.innerHTML = icon + 'Enter a number';
  } else if (arguments.callee.caller.name == 'guessWithinRange') {
    element.nextElementSibling.innerHTML = icon + 'Guess out of range';
  } else if (arguments.callee.caller.name == 'rangeCheck' && minRange !== '') {
    element.nextElementSibling.innerHTML = icon + 'Number too low';
  }
 }  


function removeErrorClass(element) {
  element.classList.remove('error');
  element.nextElementSibling.classList.add('hidden');
}

function isNumberKey(e){
  var char = e.key;
  if (char === 'Backspace' || char === 'Tab' || char === 'Shift' || parseInt(char) || parseInt(char) === 0) {
    removeErrorClass(e.target);
    return true;
  } else {
    e.preventDefault();
    addErrorClass(e.target);
    return false;
  }
}

function isAlphaNumeric(e){
  // The \w regex stands for all alphanumeric characters
  var regex = /\w/;
  var char = e.key;
  if (char === 'Backspace' || char === 'Tab' || char === ' ' || regex.test(char)) {
    removeErrorClass(e.target);
    return true;
  } else {
    e.preventDefault();
    addErrorClass(e.target);
    return false;
  }
}

function guessWithinRange(evt) {
  if (guess1 < minRange || guess1 > maxRange) {
    addErrorClass(evt.path[2].querySelector('#guess1'));    
  } 

  if (guess2 < minRange || guess2 > maxRange) {
    addErrorClass(evt.path[2].querySelector('#guess2'));
  } else {
    return true;
  }
}

function rangeCheck() {
  if (minRange == '' || maxRange == '') {
    addErrorClass(document.getElementById('min-range'));
    addErrorClass(document.getElementById('max-range'));
  }  

  if (maxRange < minRange) {
    addErrorClass(document.getElementById('max-range'));
  } else {
    return true;
  }
}

function deleteCard(e) {
  if (e.target.className === 'delete-btn') {
    e.target.parentElement.parentElement.remove();
  }
}

function expandRange() {
  maxRange += 10;
  minRange -= 10;
  document.getElementById('display-min').innerText = minRange;
  document.getElementById('display-max').innerText = maxRange;
}






