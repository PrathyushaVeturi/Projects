let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
 
const userScorePara = document.querySelector("#user-score");   // to access the count of the user score
const compScorePara = document.querySelector("#comp-score");   // to access the count of the comp score

const restart = document.querySelector("#re-start");  //to access the restart option...

//generating the computer choice...
const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    //generating random index using Math.random...
    //as MAth.random() generates decimal value, we use Math.floor() function.
    //As there are 3 options to pick, we multiply it by 3.
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};


const drawGame = () => {
    msg.innerText = "Game was draw. Play Again";
    msg.style.backgroundColor = "yellow"; 
    msg.style.color = "black";
}


// to show the results....
//to show the score, who win, who loose, about draw in a move....
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.color = "white";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost... ${compChoice} beats ${userChoice}`;
        msg.style.color = "white";
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    //to generate computer choice... we are using another function gencompChoice()
    const compChoice = genCompChoice();

    // comparing the user choice and computer choice...
    if(userChoice === compChoice){
        //changing the message from "Play your move" to "the game was draw" using a function drawGame()...
        drawGame();
    }
    else{
        if(userChoice === "rock"){
            // paper or scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock or scissors
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            //rock or paper
            userWin = compChoice === "rock" ? true : false;
        }
        //to show the score, who win, who loose, about draw in a move....
        showWinner(userWin, userChoice, compChoice);
    }
};


// adding eventListener to the choices
choices.forEach((choice) => {
    //printing all the choices... 
    //console.log(choice);
    choice.addEventListener("click", () => {
        //to add which cjoice was clicked, we can get the attribute of the choice using "getAttribute"...
        const userChoice = choice.getAttribute("id");

        //to check whether the choice was clicked or not... and which choice was clicked...
        //console.log("choice was clicked", userChoice);

        //calling playGame function which is the main function... it takes the userChoice as the parameter...
        playGame(userChoice);
    });
});


restart.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerHTML = "Start Again!";
    msg.style.backgroundColor= "black";
    msg.style.color="purple";
});