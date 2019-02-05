function buttonDisable() {
  if (document.querySelector('#name1').value === '') {
    document.getElementById("reset-btn").disabled = true;
  } else {
    document.getElementById("reset-btn").disabled = false;
  }

  if (document.querySelector('#guess1').value === '') {
    document.getElementById("clear-btn").disabled = true;
  } else {
    document.getElementById("clear-btn").disabled = false;
  }
}

module.exports = buttonDisable;