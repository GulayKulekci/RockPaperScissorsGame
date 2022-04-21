const computerChoise = document.getElementById('computer-choise');
const userChoise = document.getElementById('user-choise');
const resultDisplay = document.getElementById('result');
const posibbleChoises = document.querySelectorAll('button');
let userChoiseButton;
let computerChoiseText;

posibbleChoises.forEach(possibleChoise => {

    possibleChoise.addEventListener('click', (e) => {
        userChoiseButton=e.target.id;
        userChoise.innerText = userChoiseButton;
        
        generateComputerChoise();
        getResult();
    });
});

function generateComputerChoise(){

    const randomNumber = Math.floor(Math.random() * posibbleChoises.length)+1;

    if(randomNumber === 1){
        computerChoiseText = "rock";
    }
    if(randomNumber === 2){
        computerChoiseText= "scissors";
    }
    if(randomNumber === 3){
        computerChoiseText= "paper";
    }

    computerChoise.innerText = computerChoiseText;
}

function getResult(){
   if(computerChoiseText == userChoiseButton)
   {
       result = "It'a a draw"
   }
   if(computerChoiseText === 'rock' && userChoiseButton == 'paper')
   {
       result = "You win"
   }
   if(computerChoiseText === 'rock' && userChoiseButton == 'scissors')
   {
       result = "You lost"
   }
   if(computerChoiseText === 'paper' && userChoiseButton == 'scissors')
   {
       result = "You win"
   }
   if(computerChoiseText === 'paper' && userChoiseButton == 'rock')
   {
       result = "You lose"
   }
   if(computerChoiseText === 'scissors' && userChoiseButton == 'rock')
   {
       result = "You win"
   }
   if(computerChoiseText === 'scissors' && userChoiseButton == 'paper')
   {
       result = "You lose"
   }

   resultDisplay.innerText = result ;
}