'use strict'

const config = require('../config.js')
const store = require('../store.js')

// runs an index of all mountains pulling information from the database
const getMts = () => {
  return $.ajax({
    url: config.apiUrl + '/mountains',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// runs create of a new mountain placing information into the database
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

// destroys an entry from the database, only if the the entry is owned by the user logged in
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

// updates an entry changing information in the database
// only if the the entry is owned by the user logged in
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
