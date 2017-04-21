'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

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

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  resetBoard()
  removeHandlers()
  $('#status-text').text("Let's Play!")
  api.signOut()
    .then(ui.signOutSuccess)
}

const onPasswordReset = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
}

const passwordResetConfirm = function (event) {
  $('#changePasswordModal').modal('hide')
}

const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onPasswordReset)
  $('#changePasswordModal').on('submit', passwordResetConfirm)
}

module.exports = {
  addAuthHandlers
}
