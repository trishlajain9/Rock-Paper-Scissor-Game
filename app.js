let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const replayBtn=document.getElementById("replayBtn");


const genCompChoice = () => {
    let options = ["Rock", "Paper", "Scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again. ";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You Win!! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lose. ${computerChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate computer choice
    const computerChoice = genCompChoice();

    if(userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            //scissors, paper
           userWin = computerChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper") {
            //rock, scissors
            userWin = computerChoice === "Scissors" ? false : true;  
        }
        else {
            userWin = computerChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
} )

replayBtn.addEventListener("click",()=>{

    userScore=0;
    computerScore=0;

    userScorePara.innerText=userScore;
    computerScorePara.innerText=computerScore;
    msg.innerText="Game Restarted!";
    msg.style.backgroundColor = "#081b31"
});