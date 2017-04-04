'use strict'

const boardArray = ['x', 'o', 'x', 'x', 'x', 'o', 'o', 'x', 'x']

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

const winCheck = function () {
  if (winCombo1.toString() === 'x,x,x' || winCombo1.toString() === 'o,o,o') {
    const winner = winCombo1[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo2.toString() === 'x,x,x' || winCombo2.toString() === 'o,o,o') {
    const winner = winCombo2[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo3.toString() === 'x,x,x' || winCombo3.toString() === 'o,o,o') {
    const winner = winCombo3[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo4.toString() === 'x,x,x' || winCombo4.toString() === 'o,o,o') {
    const winner = winCombo4[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo5.toString() === 'x,x,x' || winCombo5.toString() === 'o,o,o') {
    const winner = winCombo5[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo6.toString() === 'x,x,x' || winCombo6.toString() === 'o,o,o') {
    const winner = winCombo6[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo7.toString() === 'x,x,x' || winCombo7.toString() === 'o,o,o') {
    const winner = winCombo7[0]
    return 'player ' + winner + ' , you win!'
  } else if (winCombo8.toString() === 'x,x,x' || winCombo8.toString() === 'o,o,o') {
    const winner = winCombo8[0]
    return 'player ' + winner + ' , you win!'
  }
  return 'keep playing'
}

winCheck()

module.exports = true
