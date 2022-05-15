console.log('Welcome to Nay Sayers')
//setting up the defaults

let naughtTurn = true
let naught = 'Yay'
let cross = 'Nay'
let gameIsOver
let gameStatus = document.getElementById('subtitle')
let symbol
// an array containing all the possible squares on the board

let cells = document.getElementsByTagName('TD')

// the ability to click on the squares and have the squares assign a value of either O or X

for (let i = 0; i < cells.length; i++) {
  cells[i].onclick = cellClicked
}
// what happens when you click on a cell? function cellClicked occurs:
function cellClicked(e) {
  // declaring the variable cell to equal the target of what is clicked so we can do something with it
  if (gameIsOver == true) {
    return
  }
  let cell = e.target
  let symbol = naughtTurn ? naught : cross
  // if the cell is empty check the .innerHTML property
  //Figure out which symbol to put inside depending on whos turn it is
  // put the symbol inside the cell by using .innerHTML
  //if (cell.innerHTML == '') cell.innerHTML = cell ? 'x' : 'O'
  if (cell.innerHTML == '' && !gameIsOver)
    // && naughtTurn == true)
    // the naughtTurn = !naughtTurn just changes naughtTurn into its opposite or not its current state, and for booleans that is true or !true
    //(cell.innerHTML = naught), (naughtTurn = !naughtTurn)
    (cell.innerHTML = symbol), (naughtTurn = !naughtTurn)
  else if (cell.innerHTML == '' && !gameIsOver)
    //&& naughtTurn == false)
    //(cell.innerHTML = cross), (naughtTurn = !naughtTurn)
    (cell.innerHTML = symbol), (naughtTurn = !naughtTurn)
  // check to see if the player won with that move - a function checkForWin will need to be made
  checkForWin(symbol)
  // if the game isnt over
  if (!gameIsOver && naughtTurn === true)
    gameStatus.innerHTML = 'Those that say Yay'
  else if (!gameIsOver && naughtTurn === false)
    gameStatus.innerHTML = 'Those that say Nay'
  //switch turns
  // update subtitle saying whose turn it is now

  if (gameIsOver === true && symbol === symbol) {
    document.getElementById('subtitle').innerHTML =
      'Forsooth, ' + symbol + ' hath claimed victory!'
    // } else if (gameIsOver === true && symbol === symbol) {
    //   document.getElementById('subtitle').innerHTML =
    //     'Forsooth, ' + symbol + ' hath toppled thine Nay sayers'
  } else gameIsOver = false
  //checkForWin(naught)
}

function checkForWin(symbol) {
  // if a symbol appears three times in a row in the board cells

  // horizontally
  if (
    cells[0].innerHTML == symbol &&
    cells[1].innerHTML == symbol &&
    cells[2].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[3].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[5].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[6].innerHTML == symbol &&
    cells[7].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  //vertically
  else if (
    cells[0].innerHTML == symbol &&
    cells[3].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[1].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[7].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[2].innerHTML == symbol &&
    cells[5].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  //diagonally
  else if (
    cells[2].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[6].innerHTML == symbol
  )
    gameIsOver = true
  else if (
    cells[0].innerHTML == symbol &&
    cells[4].innerHTML == symbol &&
    cells[8].innerHTML == symbol
  )
    gameIsOver = true
  // the game is over

  // if game is over post the winners name or is it a tie!
}

// a boolean to keep tracka of whos turn it is and logic to switch turns once a player has made their turn.

//logic to display whos turn it is

//a function that checks the grids to see if the game has been won

// a function to display __ is the winner!
// function displayWinner(winner) {
//   if (gameIsOver == true) {
//     alert(gameStatus)
//   }
//}
