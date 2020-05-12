async function start(userChoice) {
  
  //store computer choice, user choice comes from start argument
  let computerChoice = genCompChoice();
  
  //verify draw
  if (verifyDraw(userChoice, computerChoice) == true) {
    showResult('draw');
    await new Promise(r => setTimeout(r, 2000));
    reset()
    return
  }

  //show the user and computer choices
  showChoices(userChoice, computerChoice)
  
  //wait for the delay inside the showChoices
  await new Promise(r => setTimeout(r, 2000));

  //verify winner and respectively show the result
  if (userWon(userChoice, computerChoice) == true) {
    showResult('win')
  }
  else {
    showResult('loose')
  }

  //stay with the result in page by 2 sec
  await new Promise(r => setTimeout(r, 2000));

  //restart the game
  reset()
}

//generate a number from 0 to 2, it will be the choose of computer
const genCompChoice = () => Math.floor(Math.random() * 3);

// verify if it is a  draw
function verifyDraw(userChoice, computerChoice) {
  //if draw return true
  if (userChoice == computerChoice) {
    return true
  }

  return false
}

//verify the winner
function userWon (userChoice, computerChoice) {
  /* The total possible events are 9 for 3 possible choices of player and 3  possible choices for computer, but we exlucuded 3 of them verifying if it is a draw. So 6 are missing and in just each one of the player chooices will be just one chance to win, decreasing our cont of 6 to 4: 3 chances to win and else loose */ 

  //possibilities to win:

  //if player choose rock and computer choose scissor
  if (userChoice == 0 && computerChoice == 2) {
    return true
  }
  //if player choose paper and computer choose rock
  else if (userChoice == 1 && computerChoice == 0) {
    return true
  }
  //if player choose scissor and computer choose paper
  else if (userChoice == 2 && computerChoice == 1) {
    return true
  }
  //else the user loose
  return false
}

//show both choices
function showChoices(userChoice, computerChoice) {

  //create a dictionary wich the "array" index is equivalent to the number into choice
  const possibleChoices = ["Rock", "Paper", "Scissor"]

  //translate from number choice to meant word using the dictionary we created
  let userResult = possibleChoices[userChoice]
  let computerResult = possibleChoices[computerChoice]

  //hide the choices div in html
  hideChoices()

  //show both choices in formated way
  showPlays(userResult, computerResult)
}

//hide choices div into html
const hideChoices = () => document.querySelector(".choices").style.display = "none";

//insert values into html and show the plays table and after 2 sec hide
async function showPlays(userResult, computerResult) {
  document.querySelector("#playerChoice").innerHTML = "You choose: " + userResult;
  document.querySelector("#computerChoice").innerHTML = "Computer choose: " + computerResult;
  
  let plays = document.querySelector(".plays")
  
  plays.style.display = "block"

  await new Promise(r => setTimeout(r, 2000));

  plays.style.display = "none"
}


const draw = document.querySelector(".draw");
const winner = document.querySelector(".winner-container");
let choices = document.querySelector(".choices");

//show the winner
function showResult(result) {
  //if its draw
  if (result == 'draw') {
    hideChoices()
    draw.style.display = "block"
  }
  //if player win
  else if (result == 'win') {
    winner.innerHTML = "You Won!!"
    winner.style.display = "block"
  }
  //if computer win
  else {
    winner.innerHTML = "Computer Won!! XD XD"
    winner.style.display = "block"
  }
}

//restart game
function reset() {
  draw.style.display = "none"
  winner.style.display = "none"
  choices.style.display = "block"
}