console.log("Welcome to tic tac toe");

// Initialize audio files for sound effects
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.wav");

// Variables to track the current turn and game state
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();

            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            } else {
                gameover.play();
            }
        }
    });
});

// Reset button logic
let reset = document.getElementsByClassName("reset")[0];
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.info').innerText = "Start Again";
    isgameover = false;
    turn = "X";
});
