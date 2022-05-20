/* Rock, Paper, Scissors against the Computer

create a function called computerPlay();
    create a variable called computerSelection and assign it an empty string;
    create a variable called randomNumber that holds a random integer between 0 and 2;
    if computerSelection is equal to 0
        computerSelection = 'rock';
    else if choice is equal to 1
        computerSelection = 'paper';
    else if choice is equal to 2
        computerSelection = 'scissors';

create a funciton called playerSelection();
    create a variable called playerChoice holding a reference to player input and prompt the player to input rock, paper or scissors;
    the input should accept case-insensitive input;
    playerChoice should be converted to 'rock', 'paper' or 'scissors' respectively;
    return the variable;
    EDIT: introduce a way to tell the player, that the word inputted was spelled incorrectly and prompt him to input anew;

create a function called playRound() that accepts two parameters: computerSelection from computerPlay() and playerSelection();
    call computerPlay() and assign its value to a variable with the same name;
    call playerSelection() and assign its value to a variable with the same name;
    determine who the winner is;
        if playerSelection == 'rock'
            if computerSelection == 'rock'
                console.log('Draw! Rock vs rock!');
            if computerSelection == 'paper'
                console.log('You lose! Paper beats rock!');             
            if computerSelection == 'scissors'
                console.log('You win! Rock beats scissors!');
        if playerSelection == 'paper'
            if computerSelection == 'rock'
                console.log('You win! Paper beats rock!');
            if computerSelection == 'paper'
                console.log('Draw! Paper vs paper!');             
            if computerSelection == 'scissors'
                console.log('You lose! Scissors beats paper!');
        if playerSelection == 'scissors'
            if computerSelection == 'rock'
                console.log('You lose! Rock beats scissors!');
            if computerSelection == 'paper'
                console.log('You win! Scissors beats paper!');             
            if computerSelection == 'scissors'
                console.log('Draw! Scissors vs scissors!');

create a function called game():
    call playRound() 5 times:
        for (i = 0, i < 5, i++) {
            playround();
            i++;
        }

*/

// create a function called computerPlay();
function computerPlay() {
    // create a variable called computerSelection and assign it an empty string;
    let computerSelection = '';

    // create a variable called randomNumber that holds a random integer between 0 and 2;
    let randomNumber = Math.floor(Math.random() * 3);

    // if computerSelection is equal to 0
    // computerSelection = 'rock';
    // else if choice is equal to 1
    // computerSelection = 'paper';
    // else if choice is equal to 2
    // computerSelection = 'scissors';
    if (randomNumber == 0) {
        computerSelection = 'rock';
    }
    else if (randomNumber == 1) {
        computerSelection = 'paper';
    }
    else if (randomNumber == 2) {
        computerSelection = 'scissors';
    }
    console.log(`Computer chose ${computerSelection} `)
    return computerSelection;
}

// create a funciton called playerSelection();
function playerSelection() {
    // create a variable called playerChoice holding a reference to player input and prompt the player to input rock, paper or scissors;
    let playerChoice = prompt('Please choose \'rock\', \'paper\' or \'scissors\'. ');

    // the input should accept case-insensitive input;
    // playerChoice should be converted to 'rock', 'paper' or 'scissors' respectively;
    playerChoice = playerChoice.toLowerCase();

    // if spelled wrong, introduce a way to tell the player, that the word inputted was spelled incorrectly and prompt him to input anew;
    // as long as the player spells incorrectly, prompt him to input correctly and only continue if input is spelled correctly;
    let flag = true;
    while (flag) {
        if (playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors') {
            playerChoice = prompt('Spelled incorrectly! Please type in \'rock\', \'paper\' or \'scissors\'.');
            playerChoice = playerChoice.toLowerCase();
        }
        else {
            flag = false;
        }
    }

    // return the variable;
    return playerChoice;
}

// create a function called playRound() that accepts two parameters: ccomputerSelection from computerPlay() and playerSelection();
function playRound(computerSelection, playerSelection) {

    // call playerSelection() and assign its value to a variable with the same name;
    playerSelection = playerSelection();

    // call computerPlay() and assign its value to a variable with the same name;
    computerSelection = computerPlay();

    // determine who the winner is;
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            console.log('Draw! Rock vs rock!');
        }
        else if (computerSelection == 'paper') {
            console.log('You lose! Paper beats rock!');  
        }
        else if (omputerSelection == 'scissors') {
            console.log('You win! Rock beats scissors!');
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('You win! Paper beats rock!');
        }
        else if (computerSelection == 'paper') {
            console.log('Draw! Paper vs paper!');  
        }
        else if (computerSelection == 'scissors') {
            console.log('You lose! Scissors beats paper!');
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('You lose! Rock beats scissors!');
        }
        else if (computerSelection == 'paper') {
            console.log('You win! Scissors beats paper!');
        }
        else if (computerSelection == 'scissors') {
            console.log('Draw! Scissors vs scissors!');
        }
    }

}

