'use strict'

const config = require('../config.js')
const store = require('../store.js')

const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/surveys/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create
  // update,
  // index,
  // show,
  // destroy
}
