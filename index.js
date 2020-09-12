const choices = ['Rock', 'Paper', 'Scissors'];

function startGame(userChoice) {
  const computerChoice = Math.floor(Math.random() * 3);

  showChoicesPage(computerChoice, userChoice);

  showResult(getWinner(computerChoice, userChoice));
}

function getWinner(computerChoice, userChoice) {

  if (userChoice == computerChoice) {
    return "it's a draw";
  }

  if (userChoice == 0 && computerChoice == 2) {
    return 'Player';
  }

  if (userChoice == 1 && computerChoice == 0) {
    return 'Player';
  }

  if (userChoice == 2 && computerChoice == 1) {
    return 'Player';
  }

  return 'Computer';
}

function showChoicesPage(computerChoice, userChoice) {
  console.log(choices[userChoice], choices[computerChoice]);
}

function showResult(result) {
  console.log(result);
}