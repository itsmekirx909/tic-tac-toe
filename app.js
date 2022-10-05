var boardToggle = document.getElementById('boardToggle');
var heading = document.getElementById('heading');
var board = document.getElementById('board');
var btnMove = document.getElementsByClassName('btnMove');
var markX = document.getElementById('X');
var markO = document.getElementById('O');
var player;
var computer;
var gameSet = 0;
var wholeReset = document.getElementById('wholeReset')
var winScreen = document.getElementById('winScreen');
var loseScreen = document.getElementById('loseScreen');
var drawScreen = document.getElementById('drawScreen');
var gameEnd = 0;


// tiles 
var t0 = document.getElementById('t0');
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');

var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');

var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');

//    tiles win

var win1 = [t0, t1, t2]
var win2 = [t3, t4, t5]
var win3 = [t6, t7, t8]
var win4 = [t0, t3, t6]
var win5 = [t1, t4, t7]
var win6 = [t2, t5, t8]
var win7 = [t0, t4, t8]
var win8 = [t2, t4, t6]

// board toggle

function start(e) {
    if (boardToggle.classList.contains('hide')) {
        boardToggle.classList.remove('hide')
        boardToggle.classList.add('show')

        heading.classList.add('hide')

        e.classList.add('hide')
    }
}

// mark 

function mark(e) {
    board.classList.remove('pointerNull')

    markX.classList.add('hide')
    markO.classList.add('hide')

    if (e.innerHTML == 'X') {
        player = 'X'
        computer = 'O'
    } else {
        player = 'O'
        computer = 'X'
    }

}

//  moves

// player move

function move(e) {
    e.innerHTML = player;
    e.classList.add('pointerNull')




    // player win

    var youWin = false

    if (win1[0].innerHTML == player && win1[1].innerHTML == player && win1[2].innerHTML == player) {
        win1[0].classList.add('win')
        win1[1].classList.add('win')
        win1[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win2[0].innerHTML == player && win2[1].innerHTML == player && win2[2].innerHTML == player) {
        win2[0].classList.add('win')
        win2[1].classList.add('win')
        win2[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win3[0].innerHTML == player && win3[1].innerHTML == player && win3[2].innerHTML == player) {
        win3[0].classList.add('win')
        win3[1].classList.add('win')
        win3[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win4[0].innerHTML == player && win4[1].innerHTML == player && win4[2].innerHTML == player) {
        win4[0].classList.add('win')
        win4[1].classList.add('win')
        win4[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win5[0].innerHTML == player && win5[1].innerHTML == player && win5[2].innerHTML == player) {
        win5[0].classList.add('win')
        win5[1].classList.add('win')
        win5[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win6[0].innerHTML == player && win6[1].innerHTML == player && win6[2].innerHTML == player) {
        win6[0].classList.add('win')
        win6[1].classList.add('win')
        win6[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win7[0].innerHTML == player && win7[1].innerHTML == player && win7[2].innerHTML == player) {
        win7[0].classList.add('win')
        win7[1].classList.add('win')
        win7[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        }
    }
    else if (win8[0].innerHTML == player && win8[1].innerHTML == player && win8[2].innerHTML == player) {
        win8[0].classList.add('win')
        win8[1].classList.add('win')
        win8[2].classList.add('win')
        board.classList.add('pointerNull')
        youWin = true
        gameEnd = 1
        setTimeout(gameOver, 1500)

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)          
              } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)            }
        }
    }
    else {

        gameSet++

        if (gameSet >= 9) {

            if (youWin == false) {
                gameEnd =  3
                setTimeout(gameOver, 1500)
            } else {
                gameEnd =  1
                setTimeout(gameOver, 1500)
            }
        } 
        
        
        else {
          setTimeout(
         

// computer move

function computerMove() {

    var allTiles = [
        t0, t1, t2,
        t3, t4, t5,
        t6, t7, t8
    ]

    var p = 0

    var emptyTiles = []

    for (var o = 0; o < 9; o++) {


        if (allTiles[o].innerHTML !== player && allTiles[o].innerHTML !== computer) {
            emptyTiles[p++] = allTiles[o]

        }


    };


    var compMove = Math.floor(Math.random() * emptyTiles.length)
    var compTurn = emptyTiles[compMove]
    compTurn.innerHTML = computer
    compTurn.classList.add('pointerNull')

    gameSet++



    // computer win

    if (win1[0].innerHTML == computer && win1[1].innerHTML == computer && win1[2].innerHTML == computer) {
        win1[0].classList.add('win2')
        win1[1].classList.add('win2')
        win1[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win2[0].innerHTML == computer && win2[1].innerHTML == computer && win2[2].innerHTML == computer) {
        win2[0].classList.add('win2')
        win2[1].classList.add('win2')
        win2[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win3[0].innerHTML == computer && win3[1].innerHTML == computer && win3[2].innerHTML == computer) {
        win3[0].classList.add('win2')
        win3[1].classList.add('win2')
        win3[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win4[0].innerHTML == computer && win4[1].innerHTML == computer && win4[2].innerHTML == computer) {
        win4[0].classList.add('win2')
        win4[1].classList.add('win2')
        win4[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win5[0].innerHTML == computer && win5[1].innerHTML == computer && win5[2].innerHTML == computer) {
        win5[0].classList.add('win2')
        win5[1].classList.add('win2')
        win5[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win6[0].innerHTML == computer && win6[1].innerHTML == computer && win6[2].innerHTML == computer) {
        win6[0].classList.add('win2')
        win6[1].classList.add('win2')
        win6[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win7[0].innerHTML == computer && win7[1].innerHTML == computer && win7[2].innerHTML == computer) {
        win7[0].classList.add('win2')
        win7[1].classList.add('win2')
        win7[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }
    else if (win8[0].innerHTML == computer && win8[1].innerHTML == computer && win8[2].innerHTML == computer) {
        win8[0].classList.add('win2')
        win8[1].classList.add('win2')
        win8[2].classList.add('win2')
        board.classList.add('pointerNull')
        gameEnd =  2
        setTimeout(gameOver, 1500)
    }


},
           500)
        }


    }


}

// game end screen  

function gameOver(){
    boardToggle.classList.remove('show')
    boardToggle.classList.add('hide')

    wholeReset.classList.remove('hide')

    if(gameEnd == 1){
        winScreen.classList.remove('hide')
    }
   else if(gameEnd == 2){
        loseScreen.classList.remove('hide')
    }
    else if(gameEnd == 3){
        drawScreen.classList.remove('hide')
    }

}

