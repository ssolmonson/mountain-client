'use strict'

// const api = require('./api.js')
const showMtsTemplate = require('../templates/mountains.handlebars')

const getMtsSuccess = (data) => {
  const showMtsHtml = showMtsTemplate({ mountains: data.mountains })
  $('.content').html(showMtsHtml)
}

const createMtnSuccess = () => {
  // $('#message').('')
  $('#message').show().text('Entry Submitted Successfully!')
  $('#mtnModal').modal('hide')
  $('#message').delay(1500).hide('Entry Submitted Successfully!')
}

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
