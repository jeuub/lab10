let canv = document.getElementById('canvas');
let ctx = canv.getContext('2d') ;

const buttonNewRound = document.querySelector('#new');
const buttonReset = document.querySelector('#reset');
let firstPlayerWins = document.querySelector('#firstPlayer');
let secondPlayerWins = document.querySelector('#secondPlayer');
let motion = document.querySelector('#motion');

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let count = 0;

function canvasCascade() {
  // VerticalLine
  ctx.fillStyle = "black";
  ctx.fillRect(109, 0, 3, 330);
  ctx.fillStyle = "black";
  ctx.fillRect(219, 0, 3, 330);
  // HorizontalLine
  ctx.fillStyle = "black";
  ctx.fillRect(0, 109, 330, 3);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 219, 330, 3);
}
canvasCascade();

canv.addEventListener('click', canvasClick);
let clientX = 0;
let clientY = 0;
let player1 = 0;
let player2 = 0;
let gameStopper = false;
let currentPlayer = 0;
let winner = 'first' ;

const playerFirstName = 'X';
const playerSecondName = 'O';

motion.textContent = `Ходит первый игрок - ${playerFirstName}`;

function canvasClick(click) {
    clientX = click.offsetX;
    clientY = click.offsetY;
    playersMoveText();
  
    if (gameStopper == false) {
      if (clientX < 109 && clientY < 109 && board[0][0] != 'X' && board[0][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printTopLeftX();
          board[0][0] = 'X';
        } else {
          printTopLeftO();
          board[0][0] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 219 && clientY < 109 && clientX > 110 && clientY > 0 && board[0][1] != 'X' && board[0][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          playersMoveText();
          printTopCenterX();
          board[0][1] = 'X';
        } else {
          playersMoveText();
          printTopCenterO();
          board[0][1] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 330 && clientY < 109 && clientX > 220 && clientY > 0 && board[0][2] != 'X' && board[0][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printTopRightX();
          board[0][2] = 'X';
        } else {
          printTopRightO();
          board[0][2] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 109 && clientY < 219 && clientX > 0 && clientY > 110 && board[1][0] != 'X' && board[1][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterLeftX();
          board[1][0] = 'X';
        } else {
          printCenterLeftO();
          board[1][0] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 219 && clientY < 219 && clientX > 110 && clientY > 110 && board[1][1] != 'X' && board[1][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterCenterX();
          board[1][1] = 'X';
        } else {
          printCenterCenterO();
          board[1][1] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 330 && clientY < 219 && clientX > 220 && clientY > 110 && board[1][2] != 'X' && board[1][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printCenterRightX();
          board[1][2] = 'X';
        } else {
          printCenterRightO();
          board[1][2] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 109 && clientY < 330 && clientX > 0 && clientY > 220 && board[2][0] != 'X' && board[2][0] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomLeftX();
          board[2][0] = 'X';
        } else {
          printBottomLeftO();
          board[2][0] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 219 && clientY < 330 && clientX > 110 && clientY > 220 && board[2][1] != 'X' && board[2][1] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomCenterX();
          board[2][1] = 'X';
        } else {
          printBottomCenterO();
          board[2][1] = 'O';
        }
        currentPlayer += 1;
      }else if (clientX < 330 && clientY < 330 && clientX > 220 && clientY > 220 && board[2][2] != 'X' && board[2][2] != 'O') {
        if (currentPlayer % 2 == 0) {
          printBottomRightX();
          board[2][2] = 'X';
        } else {
          printBottomRightO();
          board[2][2] = 'O';
        }
        currentPlayer += 1;
      }else {
        document.getElementById("modal").style.opacity = "1";
        h1result.innerHTML = ('Это поле занято!');
      }
      ifWin();
    }

    draw();
}
// If Win
function ifWin() {
  // Diagonal First
  if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) { 
    if (board[0][0] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    }else if (board[0][0] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Horizontal First
  }else if (board[0][0] == board[0][1] && board[0][2] == board[0][1]) {
    if (board[0][0] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[0][0] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Horizontal Second
  }else if (board[1][0] == board[1][1] && board[1][2] == board[1][1]) {
    if (board[1][0] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[1][0] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Horizontal Third
  }else if (board[2][0] == board[2][1] && board[2][2] == board[2][1]) {
    if (board[2][0] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[2][0] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Diagonal Second
  }else if (board[0][2] == board[1][1] && board[2][0] == board[1][1]) {
    if (board[0][2] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[0][2] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Vertical First
  }else if (board[0][0] == board[1][0] && board[2][0] == board[1][0]) {
    if (board[0][0] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[0][0] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Vertical Second
  }else if (board[0][1] == board[1][1] && board[2][1] == board[0][1]) {
    if (board[0][1] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[0][1] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  // Vertical Third
  }else if (board[0][2] == board[1][2] && board[2][2] == board[1][2]) {
    if (board[0][2] == 'X') {
      if (winner == 'first') {
        player1 += 1;
        firstPlayerWinsFunc();
      } else if (winner == 'second') {
        player2 += 1;
        secondPlayerWinsFunc();
      }
      gameStopper = true;
    } else if (board[0][2] == 'O') {
      if (winner == 'first') {
        player2 += 1;
        secondPlayerWinsFunc();
      } else if (winner == 'second') {
        player1 += 1;
        firstPlayerWinsFunc();
      }
      gameStopper = true;
    }
  }
}
// Draw
function draw() {
  for (let i = 0; i < 3; ++i) {
    for (let j = 0; j < 3; ++j) {
      if (board[i][j] == '') {
        count += 1;
      } 
    }
  }
  if (count == 0) {
    document.getElementById("modal").style.opacity = "1";
    h1result.innerHTML = ('НИЧЬЯ');
  }
  console.log(count);
  count = 0;
}

// Player's Move Text
function playersMoveText() {
  if (winner == 'first') {
    if (currentPlayer % 2 == 1) {
      motion.textContent = `Ходит первый игрок - ${playerFirstName}`;
    } else if (currentPlayer % 2 == 0) {
      motion.textContent = `Ходит второй игрок - ${playerSecondName}`;
    }
  } else if (winner == 'second') {
    if (currentPlayer % 2 == 0) {
      motion.textContent = `Ходит первый игрок - ${playerFirstName}`;
    } else if (currentPlayer % 2 == 1) {
      motion.textContent = `Ходит второй игрок - ${playerSecondName}`;
    }
  }
}
let close = document.getElementById('close');
let h1result = document.getElementById('result');

close.onclick = closeModal;
function closeModal() {
  document.getElementById("modal").style.opacity = "0";
}

// FirstPlayerWins
function firstPlayerWinsFunc() {
  winner = 'first';
  count = 0;
  firstPlayerWins.textContent = `Первый игрок(X): ${player1}`;
  motion.textContent = `Ходит первый игрок - ${playerFirstName}`;
  document.getElementById("modal").style.opacity = "1";
  h1result.innerHTML = ('😎В этой жестокой схватке победил игрок №1(X)!');
}
// SecondPlayerWins
function secondPlayerWinsFunc() {
  winner = 'second';
  count = 0;
  secondPlayerWins.textContent = `Второй игрок(O): ${player2}`;
  document.getElementById("modal").style.opacity = "1";
  h1result.innerHTML = ('😎В этой жестокой схватке победил игрок №2(O)!');
}

// Button New Round
buttonNewRound.addEventListener('click', () => {
  ctx.clearRect(0, 0, 320, 320);
  canvasCascade();
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 0;
  count = 0;
  gameStopper = false;
}) ;
// Button Reset
buttonReset.addEventListener('click', () => {
  ctx.clearRect(0, 0, 320, 320);
  canvasCascade();
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  currentPlayer = 0;
  count = 0;
  winner = 'first';
  gameStopper = false;
  player1 = 0;
  player2 = 0;
  motion.textContent = `Ходит первый игрок - ${playerFirstName}`;
  firstPlayerWins.textContent = `Первый игрок(X): ${player1}`;
  secondPlayerWins.textContent = `Второй игрок(O): ${player2}`;
});



// X FUNCTIONS
// Top
function printTopLeftX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(20, 20);
  ctx.lineTo(80, 80);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(80, 20);
  ctx.lineTo(20, 80);
  ctx.stroke();
}
function printTopCenterX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(135, 20);
  ctx.lineTo(195, 80);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(195, 20);
  ctx.lineTo(135, 80);
  ctx.stroke();
}
function printTopRightX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(240, 20);
  ctx.lineTo(300, 80);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(300, 20);
  ctx.lineTo(240, 80);
  ctx.stroke();
}
// Center
function printCenterLeftX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(20, 130);
  ctx.lineTo(85, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(85, 130);
  ctx.lineTo(20, 200);
  ctx.stroke();
}
function printCenterCenterX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(130, 130);
  ctx.lineTo(200, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(200, 130);
  ctx.lineTo(130, 200);
  ctx.stroke();
}
function printCenterRightX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(240, 130);
  ctx.lineTo(310, 200);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(310, 130);
  ctx.lineTo(240, 200);
  ctx.stroke();
}
// Bottom
function printBottomLeftX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(20, 240);
  ctx.lineTo(80, 310);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(80, 240);
  ctx.lineTo(20, 310);
  ctx.stroke();
}
function printBottomCenterX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(130, 240);
  ctx.lineTo(200, 310);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(200, 240);
  ctx.lineTo(130, 310);
  ctx.stroke();
}
function printBottomRightX() {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(240, 240);
  ctx.lineTo(310, 310);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.moveTo(310, 240);
  ctx.lineTo(240, 310);
  ctx.stroke();
}

// O FUNCTIONS
// Top
function printTopLeftO() {
  ctx.beginPath();
  ctx.arc(55, 55, 40, 0, 360);  
  ctx.stroke();
}
function printTopCenterO() {
  ctx.beginPath();
  ctx.arc(165, 55, 40, 0, 360);
  ctx.stroke();
}
function printTopRightO() {
  ctx.beginPath();
  ctx.arc(275, 55, 40, 0, 360);
  ctx.stroke();
}
// Center
function printCenterLeftO() {
  ctx.beginPath();
  ctx.arc(55, 165, 40, 0, 360);
  ctx.stroke();
}
function printCenterCenterO() {
  ctx.beginPath();
  ctx.arc(165, 165, 40, 0, 360);
  ctx.stroke();
}
function printCenterRightO() {
  ctx.beginPath();
  ctx.arc(275, 165, 40, 0, 360);
  ctx.stroke();
}
// Bottom
function printBottomLeftO() {
  ctx.beginPath();
  ctx.arc(55, 275, 40, 0, 360);
  ctx.stroke();
}
function printBottomCenterO() {
  ctx.beginPath();
  ctx.arc(165, 275, 40, 0, 360);
  ctx.stroke();
}
function printBottomRightO() {
  ctx.beginPath();
  ctx.arc(275, 275, 40, 0, 360);
  ctx.stroke();
}