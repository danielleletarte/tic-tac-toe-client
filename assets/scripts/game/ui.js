'use strict'

const gameStore = require('../game-store.js')
const win = require('../game-logic.js')
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

const displayStatsFailure = (error) => {
  console.error(error)
}

const newMoveSuccess = (data) => {
  gameStore.game.clickCount++
  gameStore.game.cells = data.game.cells
  if (win.winCheck(gameStore.game.cells) === 'x' || win.winCheck(gameStore.game.cells) === 'o') {
    $('#new-game-button').css('background-color', '#F0B39E')
    const winner = win.winCheck(gameStore.game.cells)
    $('#status-text').text('Player ' + winner + ' wins!')
    const data = {
      'game': {
        'over': 'true'
      }
    }
    api.sendWinner(data)
    lockBoard()
  } else if (win.winCheck(gameStore.game.cells) === 'none') {
    $('#status-text').text("Cat's game!")
    $('#new-game-button').css('background-color', '#F0B39E')
    const data = {
      'game': {
        'over': 'true'
      }
    }
    api.sendWinner(data)
    lockBoard()
  }
}

const newMoveFailure = (error) => {
  console.error(error)
}

const lockBoard = () => {
  $('#0').off('click')
  $('#1').off('click')
  $('#2').off('click')
  $('#3').off('click')
  $('#4').off('click')
  $('#5').off('click')
  $('#6').off('click')
  $('#7').off('click')
  $('#8').off('click')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  newMoveSuccess,
  newMoveFailure,
  resetBoard,
  displayStatsFailure
}
