'use strict'

const checkElementNull = function (element) {
  return element !== ''
}

let winner = ''

const winCheck = function (array) {
  const boardArray = array

// Build new boardArrays from boardArray for each winning combination

  const winCombo1 = boardArray.slice(0, 3)
  const winCombo2 = boardArray.slice(3, 6)
  const winCombo3 = boardArray.slice(6, 9)
  const winCombo4 = [boardArray.slice(0, 1).toString(), boardArray.slice(4, 5).toString(), boardArray.slice(8, 9).toString()]
  const winCombo5 = [boardArray.slice(0, 1).toString(), boardArray.slice(3, 4).toString(), boardArray.slice(6, 7).toString()]
  const winCombo6 = [boardArray.slice(1, 2).toString(), boardArray.slice(4, 5).toString(), boardArray.slice(7, 8).toString()]
  const winCombo7 = [boardArray.slice(2, 3).toString(), boardArray.slice(5, 6).toString(), boardArray.slice(8, 9).toString()]
  const winCombo8 = [boardArray.slice(2, 3).toString(), boardArray.slice(4, 5).toString(), boardArray.slice(6, 7).toString()]

// Check if current status of boarArray produces a winner

  if (winCombo1.toString() === 'x,x,x' || winCombo1.toString() === 'o,o,o') {
    winner = winCombo1[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
    //  //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      // //('#status-text').text('Player O wins!')
    }
  } else if (winCombo2.toString() === 'x,x,x' || winCombo2.toString() === 'o,o,o') {
    winner = winCombo2[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      // //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      // //('#status-text').text('Player O wins!')
    }
  } else if (winCombo3.toString() === 'x,x,x' || winCombo3.toString() === 'o,o,o') {
    winner = winCombo3[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      // //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      // //('#status-text').text('Player O wins!')
    }
  } else if (winCombo4.toString() === 'x,x,x' || winCombo4.toString() === 'o,o,o') {
    winner = winCombo4[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      //('#status-text').text('Player O wins!')
    }
  } else if (winCombo5.toString() === 'x,x,x' || winCombo5.toString() === 'o,o,o') {
    winner = winCombo5[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      //('#status-text').text('Player O wins!')
    }
  } else if (winCombo6.toString() === 'x,x,x' || winCombo6.toString() === 'o,o,o') {
    winner = winCombo6[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      //('#status-text').text('Player O wins!')
    }
  } else if (winCombo7.toString() === 'x,x,x' || winCombo7.toString() === 'o,o,o') {
    winner = winCombo7[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      //('#status-text').text('Player O wins!')
    }
  } else if (winCombo8.toString() === 'x,x,x' || winCombo8.toString() === 'o,o,o') {
    winner = winCombo8[0]
    // console.log('player ' + winner + ', you win!')
    if (winner === 'x') {
      //('#status-text').text('Player X wins!')
    } else if (winner === 'o') {
      //('#status-text').text('Player O wins!')
    }
  } else if (array.every(checkElementNull) === true) {
    winner = 'none'
    // console.log("cat's game!")
    //('#status-text').text("Cat's game!")
  // } else console.log('keep playing')
  }
  else {
    winner = ''
  }
  return winner
}

module.exports = {
  winCheck
}
