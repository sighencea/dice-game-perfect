var overlay = document.getElementById('reroll-overlay');
if (overlay) {
  overlay.style.display = 'none';
}

function performRollLogic() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

function rollDiceAndDeclareWinner() {
  performRollLogic();
}

function handleRollButtonClick() {
  if (overlay) {
    overlay.style.display = 'flex';
  }

  setTimeout(function() {
    performRollLogic();

    // Change button text from "Roll Dice" to "Roll Again" after first roll
    if (rollButton && rollButton.textContent === 'Roll Dice') {
      rollButton.textContent = 'Roll Again';
    }

    if (overlay) {
      overlay.style.display = 'none';
    }
  }, 2000);
}

var rollButton = document.getElementById("roll-button");
if (rollButton) {
  rollButton.addEventListener("click", handleRollButtonClick);
}

// Initial roll when the page loads
// rollDiceAndDeclareWinner();
