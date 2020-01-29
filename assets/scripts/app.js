'use strict'

const authEvents = require('./auth/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  authEvents.addHandlers()
})
