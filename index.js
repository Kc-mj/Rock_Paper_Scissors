let playerScore = 0 
let computerScore = 0 

const computerPlay = () =>  { 
    const choices  = ['rock', 'paper', 'scissors']; 
    const randomNumber = Math.floor(Math.random() * 3); 
    console.log(choices[randomNumber]); 
    const computerChoice = choices[randomNumber]; 
    return computerChoice
}

const playRound = (playerSelection, computerSelection) => { 
    if (playerSelection === 'rock' && computerSelection === 'rock') { 
        return 'You tied!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'scissors') { 
        return 'You tied!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'paper') { 
        return 'You tied!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'rock') { 
        computerScore++
        return 'You lost!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'paper') { 
        computerScore++
        return 'You lost!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'scissors') { 
        computerScore++
        return 'You lost!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') { 
        playerScore++
        return 'You win!'
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors') { 
        playerScore++
        return 'You win!'
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock') { 
        playerScore++
        return 'You win!'
    }
}

const playerSelection = 'rock';

const game = () => { 
    for (let i = 0; i < 5; i++ ) { 
    const playerSelection = prompt('Choose what to throw', 'Rock, Paper, Scissors').toLowerCase();
    const computerSelection = computerPlay (); 
    console.log ('1', playRound(playerSelection, computerSelection))
}
    if (playerScore > computerScore) { 
        return 'You beat the computer!!'
    }
    else if (playerScore < computerScore) { 
        return 'You lose'
    }
    else { 
        return 'You tied'
    }
}
console.log(game())