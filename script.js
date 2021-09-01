let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  let random = Math.floor(Math.random() * 10);
  return random;
}

const compareGuesses = (userGuess, pcGuess, targetNum) => {
  const userScore = getAbsoluteDistance(userGuess - targetNum);
  const pcScore = getAbsoluteDistance(pcGuess - targetNum);

  (userScore <= pcScore) ? true : false;
}

const getAbsoluteDistance = (guessAmount, targetAmount) => {
  return Math.abs(guessAmount - targetAmount);
}

const updateScore = winner => {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

const outOfRange = value => {
  if(value < 0 || value > 9) {
    return alert('Your input is out of range. Please choose a number between 0 and 9.');
  }
}