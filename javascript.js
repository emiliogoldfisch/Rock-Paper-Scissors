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
    create a variable called playerChoice holding a reference to player input and prompt the player to input
    rock, paper or scissors;
    the input should accept case-insensitive input;
    playerChoice should be converted to 'rock', 'paper' or 'scissors' respectively;
    return the variable;

create a function called playRound() that accepts two parameters: ccomputerSelection from computerPlay() and playerSelction();
    call computerPlay();
    call playerSelection();
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
    return computerSelection;
}