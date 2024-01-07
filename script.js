console.log("welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("win-audio.mp3");
let turn = "X";
let isGameOver = false;
let gameStarted = false;

// Function to change the turn
const changeTurn = ()=> {
    return turn === "X" ? "O" : "X"
} 

// Play music on "Start Game" button click
document.getElementById("startButton").addEventListener("click", () => {
    if(!gameStarted){
        music.play();
        gameStarted = true;
        enableBoxListener();
    }
    //document.getElementById("startButton").style.display = "none";
});

// Reload the window
document.getElementById("reset").addEventListener("click", () => {
    window.location.reload();
});

// Function to check for a win
const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + ' Wins the game, Joey is Yours';
            isGameOver = true;
            music.pause();
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "280px";
        }
})
}
// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");

const enableBoxListener = () => {
    Array.from(boxes).forEach(element => {
        let boxText = element.querySelector('.boxText');
        element.addEventListener('click', ()=>{
            if(gameStarted && !isGameOver && boxText.innerText === ''){
                boxText.innerText = turn;
                turn = changeTurn();
                audioturn.play();
                checkWin();
                if(!isGameOver){
                    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;
                }
            }
        });
    }); 
}

enableBoxListener();