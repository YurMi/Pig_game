'use strict';
const dropBtn = document.querySelector('.btn--roll');
const firstScore = document.querySelector('.current-score');
const leaveBtn= document.querySelector('.btn--hold');
const kubSide = document.querySelector('.dice');






//=========
// starting data
let arrNumbersFromKub = 0;//Массив из случайных чисел от кубика 

//=========
function toStartGame() {
    
    //Случайное число кубика
    let RandomNumber = randomNumber();
    console.log(RandomNumber);

    ChachKubImage(RandomNumber);

    let scoreWhoCanBirn = arrNumbersFromKub += RandomNumber; //Получаем сумму из чисел полученных от кубика.
    firstScore.textContent = scoreWhoCanBirn; //Полученную сумму отправлям в HTML


    
}
// toStartGame()
















//Random number 1-6
function randomNumber() {
   return Math.floor(Math.random() * 6)+1;
}


function ChachKubImage(RandomNumber){

    if(RandomNumber == 1){
        kubSide.src = './dice1.png';
    } else if ( RandomNumber == 2){
        kubSide.src = './dice2.png';
    } else if ( RandomNumber == 3){
        kubSide.src = './dice3.png';
    } else if ( RandomNumber == 4){
        kubSide.src = './dice4.png';
    } else if ( RandomNumber == 5){
        kubSide.src = './dice5.png';
    } else if ( RandomNumber == 6){
        kubSide.src = './dice6.png';
    }

}


dropBtn.addEventListener('click', toStartGame);

