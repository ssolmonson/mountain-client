'use strict'

// const store = require('../store.js')

const showMtsTemplate = require('../templates/mountains.handlebars')

const getMtsSuccess = (data) => {
  const showMtsHtml = showMtsTemplate({ mountains: data.mountains })
  // console.log(data.mountains.length)

  // if there are items to display from the mountains table show the items
  if (data.mountains.length > 0) {
    $('.content').html(showMtsHtml)
    $('#clearMtBtn').show()
    // otherwise show a message to create an entry
  } else {
    $('#message').show().text('Create an entry first!')
    $('#message').delay(2000).hide('Create an entry first!')
  }
}

// notifies the user of a successfull entry creation, message will self distruct after 1500ms
// hides the modal after the submit button, within the form, is clicked
const createMtnSuccess = () => {
  // $('#message').('')
  $('#message').show().text('Entry Submitted Successfully!')
  $('#mtnModal').modal('hide')
  $('#message').delay(2000).hide('Entry Submitted Successfully!')
  $('.new-mountain').trigger('reset')
}

// notifies the user of a successfull update, message will self distruct after 1500ms
// hides the modal after the submit button, within the form, is clicked
const updateMtnSuccess = () => {
  $('#message').show().text('Entry Updated!')
  $('.update-mountain').trigger('reset')
  $('#mtnUpdateModal').modal('hide')
  $('#message').delay(2500).hide('Entry Updated!')
}

const clearMts = () => {
  $('.content').empty()
  $('#clearMtBtn').hide()
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  getMtsSuccess,
  createMtnSuccess,
  updateMtnSuccess,
  clearMts,
  // displayLength,
  failure
}
