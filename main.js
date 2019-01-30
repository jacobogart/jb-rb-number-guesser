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

function makeGuess() {
  updateName();
  updateGuess();
  guessResultOne();
  guessResultTwo();
  correctGuessOne();
  // console.log(randomNumber);
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

