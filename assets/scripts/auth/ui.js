'use strict'

const store = require('../store.js')
const newGame = require('../game/events.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSuccess = (data) => {
  console.log('signIn success ran. data is:', data)
  store.user = data.user
  newGame.startNewGame()
  $('#welcome-modal').modal('hide')
}

const signInFailure = (error) => {
  console.log('signIn failure ran. error status:', error.status)
  $('#welcome-modal-body').append('<p> Invalid username/password </p>')
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
