'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignUpConfirm = function (event) {
  $('#welcome-modal').modal('hide')
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  console.log('sign in ran!')
}

const onSignInConfirm = function (event) {
  $('#welcome-modal').modal('hide')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  console.log('sign out ran!')
}

const onPasswordReset = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const passwordResetConfirm = function (event) {
  $('#changePasswordModal').modal('hide')
}

const addAuthHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('click', onSignOut)
  $('#change-password').on('submit', onPasswordReset)
  $('#signUpModal').on('click', onSignUpConfirm)
  $('#signInModal').on('click', onSignInConfirm)
  $('#changePasswordModal').on('submit', passwordResetConfirm)
}

module.exports = {
  addAuthHandlers
}
