/* const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let board = [];
const column = 3;
const row = 3;
const spacing = 150;
let data = new Array;
let currentPlayer = player.man;
const xKey = new Image(150,150);
xKey.src ="X.jfif";
const oKey = new Image(150,150);
oKey.src ="O.jfif";
const combinations = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7,],
    [2, 5, 8,],
    [0, 4, 8,],
    [2, 4, 6,]
];

function createBoard() {
    let id = 0;
    for(let i = 0; i < row; i++){
        board[i] = [];
        for(let j = 0; j < column; j++){
            board[i][j] = id;
            id++;

            ctx.strokeStyle = "white";
            ctx.strokeRect(j * spacing, i * spacing, spacing, spacing);
        }
    }
}

createBoard();

function drawPlayer(player, i, j){
    let img = player == "X" ? xKey : oKey;

    ctx.drawImage(img, j * spacing, i * spacing);
}

let gameOver = false;

canvas.addEventListener ('click', function(event){
    if (gameOver) {
        return;
    }

    let X = event.clientX - canvas.getBoundingClientRect().x;
    let Y = event.clientY - canvas.getBoundingClientRect().y;
    let i = Math.floor(Y/spacing);
    let j = Math.floor(X/spacing);
    let id = board[i][j];

    if(data[id]) {
        return;
    }

    data[id] = currentPlayer;

    drawPlayer(currentPlayer, i , j);

    if(winGame(data, currentPlayer)){
        gameStatus(currentPlayer);
        gameOver = true;
        return;
    }

    if(tieGame(data, currentPlayer)){
        gameStatus(currentPlayer);
        gameOver = true;
        return;
    }


} )

function winGame(data, player){
    for(let i = 0; i < combinations.length; i++){
        let won = true;
        for(let j = 0; j < combinations[i].length; j++){
            let id = COMBOS[i][j];
            won = data[id] == player && won;
        }
        if(won){
            return true;
        }
    }
    return false;
}

function tieGame(data, player){
    let tie = true;
    for(let i = 0; i < data.length; i++){
            tie = data[i] && tie;
        }
        if(tie){
            return true;
        }
    return false;
}

function gameStatus(player){

} */


let board = [    
    [0,1,2,],
    [3,4,5,],
    [6,7,8,]
];

let user = "X";

let gameOver = false;

