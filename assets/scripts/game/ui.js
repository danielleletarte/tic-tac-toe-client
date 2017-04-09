'use strict'

const gameStore = require('../game-store.js')
const win = require('../game-logic.js')
const gameLog = require('../game-log.js')
const api = require('./api.js')

const resetBoard = function () {
  $('#0').empty().css('background-color', 'transparent')
  $('#1').empty().css('background-color', 'transparent')
  $('#2').empty().css('background-color', 'transparent')
  $('#3').empty().css('background-color', 'transparent')
  $('#4').empty().css('background-color', 'transparent')
  $('#5').empty().css('background-color', 'transparent')
  $('#6').empty().css('background-color', 'transparent')
  $('#7').empty().css('background-color', 'transparent')
  $('#8').empty().css('background-color', 'transparent')
}

const newGameSuccess = (data) => {
  console.log(data)
  gameStore.game = data.game
  gameStore.game.clickCount = 1
  console.log('gameStore game ', gameStore.game)
}

const newGameFailure = (error) => {
  console.error(error)
}

// const displayStatsSuccess = (data) => {
//   console.log('get games request looks like: ', data)
//   gameLog.games = data.games
//   console.log('gameLog games looks like: ', gameLog.games)
// }

const displayStatsFailure = (error) => {
  console.error(error)
}

const newMoveSuccess = (data) => {
  gameStore.game.clickCount++
  console.log(data)
  gameStore.game.cells = data.game.cells
  console.log('gameStore game cells', gameStore.game.cells)
  // win.winCheck(gameStore.game.cells)// maybe move this down in if block -->
  console.log('array to check win against ', gameStore.game.cells)
  if (win.winCheck(gameStore.game.cells) === 'x' || win.winCheck(gameStore.game.cells) === 'o') {
    const winner = win.winCheck(gameStore.game.cells)
    console.log('winner is ', winner)
    $('#status-text').text('Player ' + winner + ' wins!')
    const data = {
      'game': {
        'over': 'true'
      }
    }
    api.sendWinner(data)
  } else if (win.winCheck(gameStore.game.cells) === 'none') {
    $('#status-text').text("Cat's game!")
  }
}

const newMoveFailure = (error) => {
  console.error(error)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  newMoveSuccess,
  newMoveFailure,
  resetBoard,
  // displayStatsSuccess,
  displayStatsFailure
}
