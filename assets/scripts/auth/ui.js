'use strict'

const store = require('../store.js')
// const newGame = require('../game/events.js')

const signUpSuccess = (data) => {
  $('#welcome-modal-body').append('<p> Account created. Sign in to play! </p>')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
}

const signUpFailure = () => {
  $('#welcome-modal-body').append('<p> Account with username already exists. Try again. </p>')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#welcome-modal').modal('hide')
  $('#new-game-button').css('background-color', '#F0B39E')
}

const signInFailure = () => {
  $('#welcome-modal-body').append('<p> Invalid username/password </p>')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

const signOutSuccess = () => {
  store.user = null
  $('#welcome-modal').modal('show')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess
}
