'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('./../../../lib/get-form-fields')

// function called from a click of the Get Mountains button, gets all mountains from the database
const onGetMts = (event) => {
  event.preventDefault()
  // console.log(event)
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
    .then(() => onGetMts(event))
    .catch(ui.failure)
}

const onClearMts = () => {
  event.preventDefault()
  ui.clearMts()
}

const onRemoveMtn = (event) => {
  event.preventDefault()
  // console.log(event)

  // get id from mountains.handlebars
  const id = $(event.target).data('id')
  api.removeMtn(id)
    .then(() => onGetMts(event))
    .catch(ui.failure)
}

const onShowUpdate = () => {
  event.preventDefault()
  $('#mtnUpdateModal').modal('show')
  // $('#modal-6').on('show.bs.modal', function (e) {
  //   const id = $(e.relatedTarget).data('id')
  //   console.log(id)
  // })
}

const onUpdateMtn = (event) => {
  event.preventDefault()

  const form = event.target

  const data = getFormFields(form)
  // console.log(data)
  $('#modal-6').on('show.bs.modal', function (e) {
    const id = $(e.relatedTarget).data('id')
    console.log(id)

    // const id = $(event.target).data('id')
    // console.log(id)

    api.updateMtn(data, id)
      .then(ui.updateMtnSuccess)
      .then(() => onGetMts(event))
      .catch(ui.failure)
  })
}

const addHandlers = () => {
  $('#getMtBtn').on('click', onGetMts)
  $('#clearMtBtn').on('click', onClearMts)
  $('.new-mountain').on('submit', onCreateMtn)
  $('.content').on('click', '.remove', onRemoveMtn)
  $('.content').on('click', '.update', onShowUpdate)
  $('.update-mountain').on('submit', onUpdateMtn)
}

module.exports = {
  addHandlers,
  getFormFields
}
