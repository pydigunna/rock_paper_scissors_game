function getHumanChoice(){
    let humanChoice=prompt("enter user choice");
    return humanChoice;
}
function getComputerChoice(){
    let randint=Math.random();
    let computerChoice;
    if(randint<0.34){
        computerChoice="rock";
    }
    else if(randint<=0.67){
      computerChoice="paper";
    }
    else{
      computerChoice="scissors";
    }
    return computerChoice;
}
function playGround(humanChoice,computerChoice){
    if(humanChoice===computerChoice){
        return 0;
    }
    else if(humanChoice=="rock"&&computerChoice=="scissors"||humanChoice=="paper"&&computerChoice=="rock"||humanChoice=="scissors"&&computerChoice=="paper"){
        return 1;
    }
    return 2;
}
function score(){
    let humanScore=0;
    let computerScore=0;
    let n=prompt("enter number of rounds");
    for(let i=0;i<n;i++){
        let res=playGround(getHumanChoice(),getComputerChoice());
            if(res===1){
                console.log("You won!");
                humanScore++;
            }
            if(res==2){
                computerScore++;
                console.log("computer won!");
            }
            if(res===0){
                console.log("this round is tie");
            }
        }
        if(humanScore>computerScore){
            console.log( "finally you win the game");
        }
        else if(humanScore<computerScore){
            console.log(" finally you lost the game");
        }
        else{
            console.log("game is tie");
        }
    }
