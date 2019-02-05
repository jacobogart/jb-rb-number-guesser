function isNumber(char){
  var regex = /[\d]/;
  if (char === 'Backspace' || char === 'Tab' || regex.test(char)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isNumber;