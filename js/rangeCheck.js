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