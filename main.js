var randomNumber = generateRandomNumber();

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

function makeGuess() {
  var name1 = document.querySelector('#name1').value;
  var name2 = document.querySelector('#name2').value;
  var challengerNameOne = document.querySelectorAll('.challenger-name1');
  for (var i = 0; i < challengerNameOne.length; i++) {
    challengerNameOne[i].innerText = name1;
  }
  var challengerNameTwo = document.querySelectorAll('.challenger-name2');
  for (var i = 0; i < challengerNameTwo.length; i++) {
    challengerNameTwo[i].innerText = name2;
  }
}