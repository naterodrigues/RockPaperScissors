let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score"); /*HTML Variables that store 'DOM' elements */
const computerScore_span = document.getElementById("computer-score"); /*HTML Variables that store 'DOM' elements */
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

/* Caching the'DOM' ^ storing all these elements in variables for future use */
/* Also important for performance, runs quicker */

function getComputerChoice() {
    const choices = ['r','p','s'];
    /* math javascript object to pick a random value */
    const randomNumber = (Math.floor(Math.random()*3)); /* picks a number between 0 and 3. Math Floor round it down to 0, 1 or 2*/
    return choices[randomNumber];
} /* This function gets a random number from 0 to 2 and returns either R, P, S respectively */


function convertToWord(letter) {
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scissors";
}


function win(userChoice,computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++; // Increase user score by +1 with each win
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Yaaaas you chose ${convertToWord(userChoice)} which beats ${convertToWord(computerChoice)}. You win! 🔥`;
    //  ES6 you can do backticks and use $ curly brackets to differentiate functions

// When the User Win, add a 'green-glow' class to the div the user clicked on. 
userChoice_div.classList.add('green-glow'); //  The classList method gives you an array of all the classes on the element. We are just adding a new clas to that array. */
setTimeout(()=> userChoice_div.classList.remove('green-glow'),300); //Remove green-glow after 0.3 seconds it is displayed
}

function lose(userChoice,computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++; // Increase computer score by +1 with each win
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Bad luck, you chose ${convertToWord(userChoice)} which loses to ${convertToWord(computerChoice)}. 😭`;

    userChoice_div.classList.add('red-glow'); //  The classList method gives you an array of all the classes on the element. We are just adding a new clas to that array. */
    setTimeout(() => userChoice_div.classList.remove('red-glow'),300); //Remove red-glow after 0.3 seconds it is displayed
    
}

function draw(userChoice,computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You both chose ${convertToWord(userChoice)}. It's a draw.`;

    userChoice_div.classList.add('grey-glow'); //  The classList method gives you an array of all the classes on the element. We are just adding a new clas to that array. */
    setTimeout(() => userChoice_div.classList.remove('grey-glow'),300); //Remove grey-glow after 0.3 seconds it is displayed
    

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    /* switch statements in lieu of if else statements */

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;

        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,computerChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }

}

function main() {

    rock_div.addEventListener('click',() => game("r"))  // ES6 can replace function() to (). Can also remove {} to => if on one line
    paper_div.addEventListener('click', () =>  game("p"))
    scissors_div.addEventListener('click', () => game("s"))
    }

    main();


