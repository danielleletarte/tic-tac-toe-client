'use strict'
const gameLog = require('../game-log.js')
const win = require('../game-logic.js')

const logGames = function (data) {
  gameLog.games = data.games
}

const numberGames = function (data) {
  const numberGames = gameLog.games.length - 1
  $('#games-played').text('Games Played : ' + numberGames)
  return numberGames
}
const numberWins = function (data) {
  let winCount = 0
  const gameList = gameLog.games.map(function (e) { return e.cells })
  for (let i = 0; i < gameLog.games.length; i++) {
    gameList[i] = win.winCheck(gameList[i])
    if (gameList[i] === 'x') {
      winCount++
    }
  }
  $('#games-won').text('Games Won : ' + winCount)
}

module.exports = {
  logGames,
  numberGames,
  numberWins
}
