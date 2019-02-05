function correctGuessOne() {
  var right = document.querySelector('.right');
  right.innerHTML += `<div class="winner-card">
        <div class="flex jc-center top-line">
          <h3 class="bold challenger-1">
            ${name1}
          </h3>
          <p class="vs">
            VS
          </p>
          <h3 class="bold challenger-2">
            ${name2}
          </h3>
        </div>
        <hr />
        <div class="middle-line">
          <h2 class="bold winner-name">
            ${name1}
          </h2>
          <h2 class="winner">
            Winner
          </h2>
        </div>
        <hr />
        <div class="flex jc-space-between bottom-line">
          <h3 class="guesses">
            <span class="bold guesses-number">47</span>
            Guesses
          </h3>
          <h3 class="minutes">
            <span class="bold minutes-number">1.35</span>
            Minutes
          </h3>
          <img class="delete-btn" src="images/icons8-cancel-2.svg" alt="delete card button" />
        </div>
      </div>`
}

module.exports = correctGuessOne;