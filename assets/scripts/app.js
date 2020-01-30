'use strict'

const authEvents = require('./auth/events')
const mountainEvents = require('./mountain/events')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#getMtBtn').hide()
  $('#clearMtBtn').hide()
  $('.mt-client').hide()
  $('.mtn-create').hide()
  authEvents.addHandlers()
  mountainEvents.addHandlers()
})
