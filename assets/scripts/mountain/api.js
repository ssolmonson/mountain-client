'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getMts = () => {
  return $.ajax({
    url: config.apiUrl + '/mountains',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createMtn = (data) => {
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/mountains',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const removeMtn = (id) => {
  // debugger
  return $.ajax({
    url: config.apiUrl + '/mountains/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateMtn = (data, id) => {
  // console.log(data, id)
  return $.ajax({
    url: config.apiUrl + '/mountains/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  getMts,
  createMtn,
  removeMtn,
  updateMtn,
  config
}
