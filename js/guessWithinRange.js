function guessWithinRange(evt) {
  if (guess1 < minRange || guess1 > maxRange) {
    evt.preventDefault();
    addError(evt.path[2].querySelector('#guess1'));    
  } 

  if (guess2 < minRange || guess2 > maxRange) {
    evt.preventDefault();
    addError(evt.path[2].querySelector('#guess2'));
  } else {
    return true;
  }
}

module.exports = guessWithinRange;