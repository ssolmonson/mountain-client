'use strict'

const config = require('../config.js')
const store = require('../store.js')

const getMts = () => {
  return $.ajax({
    url: config.apiUrl + '/mountains'
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

module.exports = {
  getMts,
  createMtn,
  config
}
