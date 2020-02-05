'use strict'

const authEvents = require('./auth/events')
const mountainEvents = require('./mountain/events')

// hide all forms and buttons on page load
$(() => {
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#cancel-change').hide()
  $('.changePassNav').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#getMtBtn').hide()
  $('#clearMtBtn').hide()
  $('.mt-client').hide()
  $('.mtn-create').hide()
  $('#clearMtBtn').hide()
  authEvents.addHandlers()
  mountainEvents.addHandlers()
})
