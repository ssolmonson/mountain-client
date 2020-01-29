'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  // get the data from the form
  const data = getFormFields(form)
  // send the data to the API
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  // handle the API response
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChange = function (event) {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changeSuccess)
    .catch(ui.changeFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChange)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers,
  getFormFields
}
