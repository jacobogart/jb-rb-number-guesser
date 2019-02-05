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