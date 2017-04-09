'use strict'
const gameLog = require('../game-log.js')
const win = require('../game-logic.js')

const logGames = function (data) {
  gameLog.games = data.games
  gameLog.games.winCount = 0
}

const numberGames = function (data) {
  const numberGames = data.length
  console.log('number of games played ', numberGames)
  $('#games-played').text('Games Played : ' + numberGames)
  return numberGames
}
const numberWins = function (data) {
  const gameList = gameLog.games.map(function (e) { return e.cells })
  for (let i = 0; i < gameList.length; i++) {
    gameList[i] = win.winCheck(gameList[i])
    if (gameList[i] === 'x') {
      gameLog.games.winCount++
    }
  }
  $('#games-won').text('Games Won : ' + gameLog.games.winCount)
}

module.exports = {
  logGames,
  numberGames,
  numberWins
}
