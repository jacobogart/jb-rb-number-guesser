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