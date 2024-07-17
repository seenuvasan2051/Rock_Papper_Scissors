let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock" , "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText ="It's a Draw !!";
    msg.style.backgroundColor ="#081b31";

}

const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("YOU Win");
        msg.innerText =`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you Loose");
        msg.innerText =`You loose!!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    //genrated Computer Choice

    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            //paper , scissors
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice ==="paper"){
            //scissors , rock
            userWin = compChoice ==="scissors" ? false : true;
        }else{
            //rock , paper
            userWin = compChoice ==="rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

