'use strict';

let  dropBtn = document.querySelector('.btn--roll');
let  firstScore = document.querySelector('.player--active .current-score');
let  score = document.querySelector('.player--active .score');
let  leaveBtn= document.querySelector('.btn--hold');
let  kubSide = document.querySelector('.dice');
let  newGameButton = document.querySelector('.btn--new');
const players = document.querySelectorAll('.player');

const player_1 = document.querySelector('.player--0');
const totalScorePlayer_1 = document.getElementById('score--0');

const player_2 = document.querySelector('.player--1');
const totalScorePlayer_2 = document.getElementById('score--1');




//=========
// starting data
let summNumbersFromKub = Number();
//=========
function toStartGame() {
    firstScore = document.querySelector('.player--active .current-score');
    score = document.querySelector('.player--active .score');

    //Случайное число кубика
    let RandomNumber = randomNumber();
    ChachKubImage(RandomNumber);
            
    //Если выпала не Единица (1)
    if(RandomNumber !== 1){
        summNumbersFromKub += RandomNumber; //Сумма из чисел полученных от кубика. Сгораемые балы
        firstScore.textContent = summNumbersFromKub; //Полученную сумму отрисовываем на странице
    } else {
        toBirnScore();
        changePlayer();
    }
}


let currentScore_1 = Number();
let currentScore_2 = Number();
//Нажимаем кнопку "Оставить"
//Сохраняем и плюсуем к несгораемым очкам
function saveData(){
    if(player_1.classList.contains('player--active')){
        currentScore_1 += summNumbersFromKub;
        totalScorePlayer_1.textContent = currentScore_1;
        if(currentScore_1 >= 100){
            player_1.classList.add('player--winner')
            dropBtn.setAttribute("disabled", "")
            leaveBtn.setAttribute("disabled", "")
        }
    } else {
        currentScore_2 += summNumbersFromKub;
        totalScorePlayer_2.textContent = currentScore_2;
        if(currentScore_2 >= 100){
            player_2.classList.add('player--winner')
            dropBtn.setAttribute("disabled", "")
            leaveBtn.setAttribute("disabled", "")
        }
    }

    changePlayer();
    toBirnScore();
}


function toBirnScore(){
    summNumbersFromKub=0;
    firstScore.textContent = 0;
}


//Меняет аkтивного игрока
function changePlayer() {
    players.forEach(element => {
        element.classList.toggle('player--active')
    });
    
}

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

//Перезапуск игры 
function resetGame(){
    location.reload();
}   
newGameButton.addEventListener('click', resetGame)


dropBtn.addEventListener('click', toStartGame);
leaveBtn.addEventListener('click', saveData)






