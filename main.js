
function setRange() {
  // console.log("test");
  var minRange = parseInt(document.getElementById('min-range').value);
  var maxRange = parseInt(document.getElementById('max-range').value);
  var randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  console.log(randomNumber);
  document.getElementById('display-min').innerText = minRange;
  document.getElementById('display-max').innerText = maxRange;
}

