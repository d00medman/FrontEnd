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

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/surveys/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = (data, id) => {
  return $.ajax({
    url: config.apiOrigin + '/surveys/' + id, // now its a 400 error
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create,
  update,
  index,
  show,
  destroy
}
