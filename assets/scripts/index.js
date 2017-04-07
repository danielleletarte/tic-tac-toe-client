'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const gameEvents = require('./game/events')
const authEvents = require('./auth/events')

// On document ready
$(() => {
  setAPIOrigin(location, config)
  gameEvents.addNewGameHandler()
  authEvents.addAuthHandlers()
  $('#welcome-modal').modal('show')
})
