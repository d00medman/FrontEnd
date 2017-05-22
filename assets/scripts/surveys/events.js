'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('create survey function fired', data)
  api.create(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onIndex = function (event) {
  console.log('index of all surveys')
  event.preventDefault()
  api.indexOfSurveys()
    .then(ui.indexOfSurveysSuccess)
    .catch(ui.indexOfSurveysFailure)
}

const onShowOneSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.showOneSurvey(data)
    .then(ui.showOneSurveySuccess)
    .catch(ui.showOneSurveyFailure)
}

const onDestroy = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const surveyId = $(event.target).attr('surveyId')
  ui.refreshTable()
  // api.destroy(data.survey.id)
  api.destroy(surveyId)
    .then(ui.destroySuccess)
    .catch(ui.destroyFailure)
}

const onUpdate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const id = data.survey.id
  const surveyId = $(this).attr('surveyId')
  console.log(data.survey.id)
  api.update(data, surveyId)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const addHandlers = () => {
  $('.create').on('submit', onCreate)
  $('.indexOfSurveys').on('click', onIndex)
  $('#getUserSurveys').on('click', onShowOneSurvey)
  // $('.destroy').on('submit', onDestroy)
  // $('.update').on('submit', onUpdate)
  $('#content').on('click', '.delete-survey-button', onDestroy)
  $('#content').on('submit', '.update-survey-by-id-form', onUpdate)
}

module.exports = {
  addHandlers
}
