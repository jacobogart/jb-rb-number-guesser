
function setRange() {
  // console.log("test");
  var minRange = parseInt(document.getElementById('min-range').value);
  var maxRange = parseInt(document.getElementById('max-range').value);
  var randomNumber = Math.floor(Math.random() * maxRange) + minRange;
  console.log(randomNumber);
}

