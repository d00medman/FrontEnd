'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const addHandlers = () => {
  $('.create').on('submit', onCreate)
  // $('.index').on('click', onIndex)
  // $('.show').on('submit', onShow)
  // $('.destroy').on('submit', onDestroy)
  // $('.update').on('submit', onUpdate)
}

module.exports = {
  addHandlers
}
