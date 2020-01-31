'use strict'

// const api = require('./api.js')
const showMtsTemplate = require('../templates/mountains.handlebars')

const getMtsSuccess = (data) => {
  const showMtsHtml = showMtsTemplate({ mountains: data.mountains })
  $('.content').html(showMtsHtml)
}

// notifies the user of a successfull entry creation, message will self distruct after 1500ms
// hides the modal after the submit button, within the form, is clicked
const createMtnSuccess = () => {
  // $('#message').('')
  $('#message').show().text('Entry Submitted Successfully!')
  $('#mtnModal').modal('hide')
  $('#message').delay(1500).hide('Entry Submitted Successfully!')
  $('.new-mountain').trigger('reset')
}

// notifies the user of a successfull update, message will self distruct after 1500ms
// hides the modal after the submit button, within the form, is clicked
const updateMtnSuccess = () => {
  $('#message').show().text('Entry Updated!')
  $('#mtnModal').modal('hide')
  $('#message').delay(1500).hide('Entry Updated!')
}

const clearMts = () => {
  $('.content').empty()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getMtsSuccess,
  createMtnSuccess,
  updateMtnSuccess,
  clearMts,
  failure
}
