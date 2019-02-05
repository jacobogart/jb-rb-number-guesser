function isAlphaNumeric(char){
  var regex = /[\W]/;
  if (char === 'Backspace' || char === 'Tab' || char === ' ' || !regex.test(char)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAlphaNumeric;