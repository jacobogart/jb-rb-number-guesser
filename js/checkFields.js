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