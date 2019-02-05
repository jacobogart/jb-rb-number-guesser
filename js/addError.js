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