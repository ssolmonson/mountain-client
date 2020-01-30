'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

const onGetMts = (event) => {
  event.preventDefault()
  console.log(event)
  api.getMts()
    .then(ui.getMtsSuccess)
    .catch(ui.failure)
}

const onCreateMtn = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  // console.log(data)

  api.createMtn(data)
    .then(ui.createMtnSuccess)
    .catch(ui.failure)
}

const onClearMts = () => {
  event.preventDefault()
  ui.clearMts()
}

const addHandlers = () => {
  $('#getMtBtn').on('click', onGetMts)
  $('#clearMtBtn').on('click', onClearMts)
  $('.new-mountain').on('submit', onCreateMtn)
}

module.exports = {
  addHandlers,
  getFormFields
}
