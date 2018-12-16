const guess = document.querySelector('input');
const form = document.querySelector('form');
const button = document.querySelector('button');
const cachedErrors = document.querySelector('#errors');
const tries = document.querySelector('span');
const results = document.querySelector('#results');
const userChoice = document.querySelector('#card1');
const answer = document.querySelector('#card2');

let number = Math.floor(Math.random() * 11);
let numTries = 3;
console.log(number)
tries.textContent = `${numTries} tries left`;

form.addEventListener('submit',function (e) {
  let errors;
  if (isNaN(guess.value) || guess.value === '') {
    errors = 'value entered is not a number';
    displayErrors(errors)
  } else if (guess.value < 0 || guess.value > 10){
    errors = 'Enter value in the specified range of 1 to 10';
    displayErrors(errors);
  } else{
    cachedErrors.textContent = '';
    numberEvaluation();
  }
  e.preventDefault();
  guess.value = '';
})

button.addEventListener('click', function () {
  numTries = 3;
  guess.disabled = false;
  results.textContent = '';
  userChoice.textContent = '';
  answer.textContent = '?';
  userChoice.style.borderColor = 'lightgrey';
  number = Math.floor(Math.random() * 11);
  console.log(number);
  tries.textContent = `${numTries} tries left`;
})

function displayErrors(error) {
  cachedErrors.textContent = error;
}

function numberEvaluation() {
  let msg;
  let col;
  if (parseInt(guess.value) === number) {
    msg = 'Hooray! you got it right.';
    col = '#52cc16';
    guess.disabled = true;
    gameResults(msg,col);
    displayChoices(col);
    displayAnswer();
  } else {
    numTries -= 1;
    tries.textContent = `${numTries} tries left`;
    if (numTries === 0) {
      guess.disabled = true;
      displayAnswer()
    } else {
      msg = "Sorry, you didn't get it right but try again.";
      col = 'red';
      gameResults(msg,col);
      displayChoices(col);
    }
  }
}

function gameResults(message, color) {
  results.textContent = message;
  results.style.color = color;
}

function displayChoices(color) {
  userChoice.textContent = guess.value;
  userChoice.style.color = color;
  userChoice.style.borderColor = color;
}

function displayAnswer() {
  answer.textContent = number;
}