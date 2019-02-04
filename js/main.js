// GLOBAL VARIABLES
var randomNumber = generateRandomNumber();
var name1, name2, guess1, guess2;
var minRange = 1; 
var maxRange = 100;
var challengerNameOne = document.querySelectorAll('.challenger-name1');
var challengerNameTwo = document.querySelectorAll('.challenger-name2');
var numberOnlyFields = document.querySelectorAll('.numeric-only');

// ON LOAD FUNCTIONS
buttonDisable();
for (var i = 0; i < numberOnlyFields.length; i++) {
  numberOnlyFields[i].addEventListener('keydown', isNumberKey);
}

// EVENT LISTENERS
document.getElementById('range-update').addEventListener('click', setRange);
document.getElementById('submit-btn').addEventListener('click', makeGuess);
document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('clear-btn').addEventListener('click', clearGame);

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
    console.log('test2')
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
  right.insertBefore(winnerCardOne, right.childNodes[0])

}

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

  right.insertBefore(winnerCardTwo, right.childNodes[0])
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

}

function clearGame() {
  document.querySelector('#guess1').value = '';
  document.querySelector('#guess2').value = '';
}

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

// ERROR FUNCTIONS
function addErrorClass(element) {
  var icon = `<img src="images/error-icon.svg" alt="error icon" width="20px"/>`
  element.classList.add('error');
  element.nextElementSibling.classList.remove('hidden');
  if (arguments.callee.caller.name == 'isNumberKey') {
    element.nextElementSibling.innerHTML = icon + 'Enter a number';
  } else if (arguments.callee.caller.name == 'guessWithinRange' && guess1 == '') {
    element.nextElementSibling.innerHTML= icon + 'Enter a number';
  } else if (arguments.callee.caller.name == 'guessWithinRange' && guess2 == '') {
    element.nextElementSibling.innerHTML= icon + 'Enter a number';
  } else if (arguments.callee.caller.name == 'guessWithinRange') {
    element.nextElementSibling.innerHTML= icon + 'Guess out of range';
  } else if (arguments.callee.caller.name == 'rangeCheck' && minRange !== '') {
    element.nextElementSibling.innerHTML= icon + 'Number too low';
  }
 }  


function removeErrorClass(element) {
  element.classList.remove('error');
  element.nextElementSibling.classList.add('hidden');
}

function isNumberKey(evt){
  var char = evt.key;
  if (char === 'Backspace' || char === 'Tab' || parseInt(char) || parseInt(char) === 0) {
    removeErrorClass(evt.target);
    return true;
  } else {
    evt.preventDefault();
    addErrorClass(evt.target);
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






