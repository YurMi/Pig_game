'use strict';

    let  dropBtn = document.querySelector('.btn--roll');
    let firstScore = document.querySelector('.player--active .current-score');
    let  score = document.querySelector('.player--active .score');
    let  leaveBtn= document.querySelector('.btn--hold');
    let  kubSide = document.querySelector('.dice');
    let  newGameButton = document.querySelector('.btn--new');
    const players = document.querySelectorAll('.player');





    //=========
    // starting data
    let summNumbersFromKub = Number();
    let summNotBirnScore = Number();
    //=========
    function toStartGame() {

        //Случайное число кубика
        let RandomNumber = randomNumber();
        ChachKubImage(RandomNumber);


        summNumbersFromKub += RandomNumber; //Сумма из чисел полученных от кубика. Сгораемые балы
        firstScore.textContent = summNumbersFromKub; //Полученную сумму отрисовываем на странице
            

        //Если выпала Единица (1)
        if(RandomNumber == 1){
            toBirnScore();
            changePlayer();
        }    
    }


    //Нажимаем кнопку "Оставить"
    //Сохраняем и плюсуем к несгораемым очкам
    function saveData(){
        summNotBirnScore+=summNumbersFromKub //Суммируется к несгораемому Счёту игрока
        score.textContent = summNotBirnScore 
        
        changePlayer();
        toBirnScore();
    }
    

    
    
    
    
    function toBirnScore(){
        summNumbersFromKub=0;
        firstScore.textContent = 0;
    }
    
    
    //Меняет ативного игрока
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
    
    
    



