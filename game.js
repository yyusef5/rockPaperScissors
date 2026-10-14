
let userScore = 0 , computerScore = 0 , round = 1;
function getComputerChoice()
{
    const choice = (Math.random() * 2).toFixed(0) ;
    

    if(choice == 0)
        return 'rock';
    else if(choice == 1)
        return 'paper';
    return 'scissors';
}

function PlayRound(ComputerChoice , HumanChoice)
{
    if(HumanChoice === ComputerChoice)
        return 'equal';
    else if(HumanChoice === 'rock' && ComputerChoice === 'scissors')
        return 'human';
    else if(HumanChoice === 'paper' && ComputerChoice === 'rock')
        return 'human';
    else if(HumanChoice === 'scissors' && ComputerChoice === 'paper')
        return 'human';
    return 'computer';
}

function determineTheWinner(Result)
{
    if(Result === 'human')
        userScore++;
    else if(Result === 'computer')
        computerScore++;
}

function playGame(userChoice)
{
    determineTheWinner(PlayRound(getComputerChoice() , userChoice));

    const currentRound = document.querySelector('.round');
    currentRound.textContent = "Round : " + round;

    const scoreResult = document.querySelector('.score');
    scoreResult.textContent = "Your score : " + userScore + " Computer Score : " + computerScore;

    round++;
    
    if(userScore == 5)
    {
        const resultDiv = document.querySelector('.result');
        const theWinner = document.createElement('div');

        theWinner.textContent = "You Win! reload the page to restart the game!";
        resultDiv.append(theWinner);
    }
    if(computerScore == 5)
    {
        const resultDiv = document.querySelector('.result');
        const theWinner = document.createElement('div');

        theWinner.textContent = "You Lose): reload the page to restart the game!";
        resultDiv.append(theWinner);
    }
}



const btn = document.querySelector('.user');

btn.addEventListener("click" , (e) =>{
    playGame(e.target.id);
    if(userScore == 5 || computerScore == 5)
        
});
