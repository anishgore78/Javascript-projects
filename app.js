const choices = document.querySelectorAll(".choice")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
let userScore=0;
let compScore=0;


const genComputerchoice=()=>{
    const size =["rock","paper","scissors"];
   const randIndx = Math.floor(Math.random()*3);
   return size[randIndx];
}

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};


const playgame=(userChoice)=>{
  console.log("User-choice",userChoice);
  const compchoice= genComputerchoice();
  console.log("Compuer choice",compchoice);
  if(userChoice===compchoice){
    //game drawn
    drawGame();
  }
 else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compchoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compchoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compchoice);
  }
};
//generate computer input->modular
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choice of user clicked is",userChoice);
    console.log(choice);
    playgame(userChoice);
  });
});