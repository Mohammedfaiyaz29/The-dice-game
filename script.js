
let randomNumber1 = Math.floor(Math.random()*6)+ 1;
let randomNumber2 = Math.floor(Math.random()*6)+ 1;
// console.log(randomNumber1);
const leftDice = document.querySelectorAll('img')[0];
const rightDice = document.querySelectorAll('img')[1]; 

const randomDiceImageLeft = `dice${randomNumber1}.png`;
const randomDiceImageRight = `dice${randomNumber2}.png`;


const imageSource1 = `images/${randomDiceImageLeft}`;
const imageSource2 = `images/${randomDiceImageRight}`;





leftDice.setAttribute("src", imageSource1);

rightDice.setAttribute("src", imageSource2);












if (randomNumber1 > randomNumber2) {

    document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!"
    
} else if (randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩"
    
} else {
    document.querySelector('h1').innerHTML = "Draw! 😔 "
}

