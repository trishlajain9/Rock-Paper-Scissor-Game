let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () => {
    console.log("Game was draw.");
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    //Generate computer choice
    const computerChoice = genCompChoice();
    console.log("computerChoice = ", computerChoice);

    if(userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
           userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;  
        }
        else {
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
} )