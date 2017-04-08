'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const gameStore = require('../game-store.js')
const gameLog = require('../game-log.js')

const startNewGame = function (event) {
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  ui.resetBoard()
  removeHandlers()
  addHandlers()
  api.grabStats()
    .then(ui.displayStatsSuccess)
    .catch(ui.displayStatsFailure)
  console.log('Are we getting any data?', gameLog.games)
  $('#status-text').text('Player X, your move!')
}

const populateSquare = function () {
  console.log('what is click count', gameStore.game.clickCount)
  $(this).css('background-color', '#94E5D6')
  const index = parseInt($(this).attr('id'))
  if (gameStore.game.clickCount % 2 === 1) {
    this.innerHTML = 'x'
    const value = 'x'
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': false
      }
    }
    api.updateBoard(data)
      .then(ui.newMoveSuccess)
      .catch(ui.newMoveFailure)
    $('#status-text').text('Player O, your move!')
  } else {
    this.innerHTML = 'o'
    const value = 'o'
    const data = {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': false
      }
    }
    api.updateBoard(data)
    .then(ui.newMoveSuccess)
    .catch(ui.newMoveFailure)
    $('#status-text').text('Player X, your move!')
  }
}

const addHandlers = () => {
  $('#0').one('click', populateSquare)
  $('#1').one('click', populateSquare)
  $('#2').one('click', populateSquare)
  $('#3').one('click', populateSquare)
  $('#4').one('click', populateSquare)
  $('#5').one('click', populateSquare)
  $('#6').one('click', populateSquare)
  $('#7').one('click', populateSquare)
  $('#8').one('click', populateSquare)
}

const removeHandlers = () => {
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

const addNewGameHandler = () => {
  $('#new-game-button').on('click', startNewGame)
}

module.exports = {
  addHandlers,
  addNewGameHandler,
  startNewGame
}
