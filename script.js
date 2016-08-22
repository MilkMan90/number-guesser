var targetNumber;
var lastGuess = document.querySelector('#last-guess');
var helpfulHint = document.querySelector('#helpful-hint');
var h4 = document.querySelector('h4');
var h5 = document.querySelector('h5');
var max=100;
var min=0;

targetNumber = Math.floor((Math.random() * 100) + 1);
h5.innerText = targetNumber;

function getValue() {
  return document.getElementById("guess").value;
}

submitBtn.addEventListener('click', function () {
  checkValue();
});

guess.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        checkValue();
    }
}, false);

clearBtn.addEventListener('click', function () {
  clearInput();
});

newGameBtn.addEventListener('click', function () {
  resetGame();
});

function randomTarget(){
  targetNumber = Math.floor((Math.random() * max) + 1);
  h5.innerText = targetNumber;
}

function checkRange(test){
    if((test > max) || (test < min)) return false;
    if((test <= max) && (test >= min)) return true;
}

function checkValue(){
  var guess = parseInt(getValue());

  if(isNaN(guess)){
    alert("Please enter a number between 1-100");
    document.getElementById("guess").value = '';
    return
  }

  if(!checkRange(guess)){
    alert("Please enter a number between 1- "+max);
    document.getElementById("guess").value = '';
    return
  }

  if (guess > targetNumber){
      helpfulHint.innerText = "Sorry, that guess is too high. Try a lower number.";
  }
  if (guess < targetNumber){
      helpfulHint.innerText = "Sorry, that guess is too low. Try a higher number.";
  }
  if(guess === targetNumber){
      helpfulHint.innerText = "YAY you Won!";
      alert("Yay you won!!!");
      max = max+10;
      resetGame();
  }
  lastGuess.innerText = getValue();
  document.getElementById("guess").value = '';
}

function clearInput(){
  document.getElementById("guess").value = '';
}

function resetGame(){
  clearInput();
  randomTarget();
  lastGuess.innerText = "____";
  helpfulHint.innerText = "New Game Started"
}
