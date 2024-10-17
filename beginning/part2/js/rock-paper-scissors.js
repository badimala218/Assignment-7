const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const computerWinString = "Computer wins!";
const userWinString = "You win!";
const lowerThird = 1 / 3;
const middleThird = 2 / 3;
let input = prompt("Rock, Paper, or Scissors?");
if (input != null)
{
    input = input.toLowerCase();
}
let computerChoice = Math.random();
if (computerChoice < lowerThird)
{
    computerChoice = rock;
}
else if (computerChoice < middleThird)
{
    computerChoice = paper;
}
else 
{
    computerChoice = scissors;
}

if (input == computerChoice)
{
    alert("Tie!");
}
else if ((input == rock && computerChoice == paper)
        || (input == scissors && computerChoice == rock)
        || (input == paper && computerChoice == scissors))
{
    alert(`Computer threw ${computerChoice}. ${computerWinString}`);
}
else if ((input == rock && computerChoice == scissors)
        || (input == scissors && computerChoice == paper)
        || (input == paper && computerChoice == rock))
{
    alert(`Computer threw ${computerChoice}. ${userWinString}`);
}
else if (input != rock && input != scissors && input != paper)
{
    alert("Invalid input.");
}

