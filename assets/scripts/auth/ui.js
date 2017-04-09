'use strict'

const store = require('../store.js')
// const newGame = require('../game/events.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#welcome-modal-body').append('<p> Account created. Sign in to play! </p>')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
}

const signUpFailure = (error) => {
  console.error(error)
  $('#welcome-modal-body').append('<p> Account with username already exists. Try again. </p>')
}

const signInSuccess = (data) => {
  console.log('signIn success ran. data is:', data)
  store.user = data.user
  // newGame.startNewGame()
  $('#welcome-modal').modal('hide')
  $('#new-game-button').css('background-color', '#F0B39E')
}

const signInFailure = (error) => {
  console.log('signIn failure ran. error status:', error.status)
  $('#welcome-modal-body').append('<p> Invalid username/password </p>')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

const signOutSuccess = () => {
  console.log('signOut success ran and nothing was returned')
  store.user = null
}

const signOutFailure = (error) => {
  console.log('signOut failure ran. error is:', error)
}

const changePasswordSuccess = (data) => {
  console.log('passWord change success ran. data is:', data)
}

const changePasswordFailure = (error) => {
  console.log('signOut failure ran. error is:', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
