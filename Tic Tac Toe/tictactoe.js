let team = document.getElementById('pickSide');
let btn = document.getElementById('strtBtn');
let close1 = document.getElementById('playGame');
let close2 = document.getElementById('strtBtn');
let btnX = document.getElementById('Xplayer');
let btnO = document.getElementById('Oplayer');
let modal= document.getElementById('modal');
let pickSection= document.getElementById('pickSide');
let user = 'X';
let game = true;
let draw = true;
let moveCount = 0;
let latestIndex = 0;
let cells = [    
  [null,null,null],
  [null,null,null],
  [null,null,null]
];
let history = [ [
      [null,null,null],
      [null,null,null],
      [null,null,null]]
  ];

btn.onclick = function() {
  team.style.display = 'block';
  close1.style.display = 'none';
  close2.style.display = 'none';
}

btnX.addEventListener('click', function xUser() {
    modal.style.display = 'block';
    pickSection.style.display = 'none';
    user = 'X';
})

btnO.addEventListener('click', function oUser() {
    modal.style.display = 'block';
    pickSection.style.display = 'none';
    user = 'O';

})

function clickedCell(num){
  if (game === true){
    let playerStatus = document.getElementById(num)
    if (playerStatus.innerText === ""){
    storeMove(num);
    user = user === "X" ? "O" : "X";
    createBoard();   
    }  
}
}

const tile1 = document.getElementById('0')
const tile2 = document.getElementById('1')
const tile3  = document.getElementById('2')
const tile4  = document.getElementById('3')
const tile5  = document.getElementById('4')
const tile6  = document.getElementById('5')
const tile7  = document.getElementById('6')
const tile8  = document.getElementById('7')
const tile9 = document.getElementById('8')


function createBoard(){
   tile1.innerText = cells[0][0];
   tile2.innerText = cells[0][1];
   tile3.innerText = cells[0][2];
   tile4.innerText = cells[1][0];
   tile5.innerText = cells[1][1];
   tile6.innerText = cells[1][2];
   tile7.innerText = cells[2][0];
   tile8.innerText = cells[2][1];
   tile9.innerText = cells[2][2];
}

document.getElementById('reset').addEventListener('click', gameRestart);



function storeMove(num){
  let board = 
  [0,1,2,
   3,4,5,
   6,7,8];
  let X = 0;
  let Y = 0;
  for (let i = 0; i<board.length; i++){
      if (num === board[i]){
          cells[X][Y] = user
          history.push(JSON.parse(JSON.stringify(cells)));
          latestIndex = history.length - 1;
          moveCount ++;
      for(let i = 0; i<3; i++){
          checkWin(cells[i][0],cells[i][1],cells[i][2])
      }
      for(let i = 0; i<3; i++){
          checkWin(cells[0][i] ,cells[1][i] ,cells[2][i])
      }
          checkWin(cells[2][0],cells[1][1],cells[0][2])
          checkWin(cells[0][0],cells[1][1],cells[2][2])
      }
      Y++
      if(Y>2){
          Y=0;
          X++;
          if(X>2){
              X=0;
          }
      }
      if (moveCount >= 9 && draw === true){
          document.getElementById('displayWinner').innerText = "Tie"
      }  
  }
}


function checkWin(A, B, C){
  if (A === B && B === C && A!=null){
      document.getElementById('displayWinner').innerText = `${user} Wins`
      game = false;
      draw = false;
      document.getElementById('undo').style.display = 'flex';
      document.getElementById('redo').style.display = 'flex';
  }
}


function gameRestart(){
  game = true;
  let gameRestart = document.getElementsByClassName('tile')
  document.getElementById('displayWinner').innerText = ""
  history = [];
  moveCount = 0;
  cells = [
      [null,null,null],
      [null,null,null],
      [null,null,null]
  ];
  history = [
      [
          [null,null,null],
          [null,null,null],
          [null,null,null]
      ]
  ];
  for (let i = 0; i < gameRestart.length; i++){
      gameRestart[i].innerText = "";
  }
  document.getElementById('undo').style.display = 'none';
  document.getElementById('redo').style.display = 'none';
}


document.getElementById('undo').addEventListener('click', ()=>{ 
  document.getElementById('redo').style.display = 'flex';
  if (latestIndex > 0){
      cells = history[latestIndex - 1];
      latestIndex = latestIndex - 1;
      createBoard();
  }
  if (latestIndex === 0){
      document.getElementById('undo').style.display = 'none';
  }
})


document.getElementById('redo').addEventListener('click', ()=>{
  document.getElementById('undo').style.display = 'flex';
  if (latestIndex < history.length - 1){
      cells = history[latestIndex + 1];
      latestIndex = latestIndex + 1;
      createBoard();
  }
  if (latestIndex === history.length - 1) {
      document.getElementById('redo').style.display = 'none';
  }
})

