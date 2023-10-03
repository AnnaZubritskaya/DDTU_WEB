const startGameButton = document.getElementById('start-button');
const player1Result = document.getElementById('1-score');
const player2Result = document.getElementById('2-score');
const player1Border=document.getElementById('1-border');
const player2Border=document.getElementById('2-border');

let DiceRes=new Array(5, [1, 9], [1,5,9], [1,3,7,9], [1,3,5,7,9], [1,3,4,6,7,9])
let RoundCount=0;

startGameButton.addEventListener('click', () => {
    RoundCount+=1;
    if (RoundCount>6) {RoundCount=1; EmptyScore();}
    
    for (let i=1; i<=9; i++) {
        let str = "square-"+i;
        let Square=document.getElementById(str);
        Square.style.backgroundColor = "white";
    }

    const diceValue = rollDice();

    let PaintSquares=DiceRes[diceValue];
    if (PaintSquares==5) {
        let Square=document.getElementById("square-5");
        Square.style.backgroundColor = "gray";
    } 
    else {
    for (let i = 0; i < PaintSquares.length; i++) {
        let str = "square-"+PaintSquares[i];
        let Square=document.getElementById(str);
        Square.style.backgroundColor = "gray";
      } 
    }
    changeScore(diceValue);
    
});

function rollDice() {
    return Math.floor(Math.random() * 6);
}

function changeScore(rolledDice) {
    rolledDice+=1;
    switch(RoundCount) {
        case 1: var liElements = player1Result.getElementsByTagName("li");
        liElements[0].textContent=rolledDice;
        player1Border.style.borderColor="dimgray";
        player2Border.style.borderColor="white";
        break;
        case 2: var liElements = player2Result.getElementsByTagName("li");
        liElements[0].textContent=rolledDice;
        player1Border.style.borderColor="white";
        player2Border.style.borderColor="dimgray";
        break;
        case 3: var liElements = player1Result.getElementsByTagName("li");
        liElements[1].textContent=rolledDice;
        player1Border.style.borderColor="dimgray";
        player2Border.style.borderColor="white";
        break;
        case 4: var liElements = player2Result.getElementsByTagName("li");
        liElements[1].textContent=rolledDice;
        player1Border.style.borderColor="white";
        player2Border.style.borderColor="dimgray";
        break;
        case 5: var liElements = player1Result.getElementsByTagName("li");
        liElements[2].textContent=rolledDice;
        player1Border.style.borderColor="dimgray";
        player2Border.style.borderColor="white";
        break;
        case 6: var liElements = player2Result.getElementsByTagName("li");
        liElements[2].textContent=rolledDice;
        player1Border.style.borderColor="white";
        player2Border.style.borderColor="dimgray";
        break;
    }
}

function EmptyScore() {
    var liElements = player1Result.getElementsByTagName("li");
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].textContent = "Результат "+(i+1);
      }
    var liElements = player2Result.getElementsByTagName("li");
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].textContent = "Результат "+(i+1);
      }
}