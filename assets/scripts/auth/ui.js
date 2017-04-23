'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#error-handler').append('<p> Account created. Sign in to play! </p>')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
}

const signUpFailure = () => {
  $('#error-handler').append('<p> Account with username already exists. Try again. </p>')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#welcome-modal').modal('hide')
  $('#new-game-button').css('background-color', '#F0B39E')
}

const signInFailure = () => {
  $('#error-handler').append('<p> Invalid username/password </p>')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
}

const signOutSuccess = () => {
  store.user = null
  $('#welcome-modal').modal('show')
  $('#error-handler').html('')
  $('#sign-in-email').val('')
  $('#sign-in-password').val('')
  $('#sign-up-email').val('')
  $('#sign-up-password').val('')
}

const changePasswordSuccess = () => {
  $('#changePasswordSuccessModal').modal('show')
  $('#change-password-old').val('')
  $('#change-password-new').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  changePasswordSuccess
}
