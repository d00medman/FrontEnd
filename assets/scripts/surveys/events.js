'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onIndex = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onShow = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.show(data.survey.id)
    .then(ui.showSuccess)
    .catch(ui.showFailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.destroy(data.survey.id)
    .then(ui.destroySuccess)
    .catch(ui.destroyFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.survey.id
  console.log(data.survey.id)
  api.update(data, id)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const addHandlers = () => {
  $('.create').on('submit', onCreate)
  $('.index').on('click', onIndex)
  $('.show').on('submit', onShow)
  $('.destroy').on('submit', onDestroy)
  $('.update').on('submit', onUpdate)
  $('#content').on('click', '.delete-task-button', onDestroy)
  $('#content').on('submit', '.update-task-by-id-form', onUpdate)
}

module.exports = {
  addHandlers
}
