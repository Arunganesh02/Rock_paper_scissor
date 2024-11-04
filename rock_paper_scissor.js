// rock paper scissor game

function getComputerChoice(){
    let rand = Math.random()
    if (rand < 0.333333){
        return "rock"
    }
    else if (rand > 0.333333 && rand<0.666666){
        return "paper"
    }
    else return "scissor";
}
obj = {
    rock:1,
    paper:2,
    scissor:3,
}
function getHumanChoice(){
    let choice = prompt("enter your choice rock, paper or scissor").toLowerCase()
    return choice
}
function playRound(comchoice , humanchoice){
    comchoice = obj[comchoice]
    humanchoice = obj[humanchoice]
    if (comchoice == humanchoice){
        console.log("draw play again")
    }
    else if (humanchoice == 1){
        if (comchoice == 2) console.log("computer wins the round");
        else {
            console.log("human wins the round")
            score++
        };
    }
    else if (humanchoice == 2){
        if (comchoice == 3) console.log("computer wins the round");
        else {
            console.log("human wins the round")
            score++
        }
    }
    else{
        if (comchoice == 1) console.log("computer wins the round");
        else {
            console.log("human wins the round");
            score++;
        }
    }
}
let score = 0
let noOfRounds = prompt("enter the number of rounds")
while(noOfRounds > 0){
    let compChoice = getComputerChoice()
    let humanChoice = getHumanChoice()
    console.log("the computer choice is " + compChoice)
    playRound(compChoice,"rock")
    console.log("your score is "+score)
    noOfRounds--;
}




