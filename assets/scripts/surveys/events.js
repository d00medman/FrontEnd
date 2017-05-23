'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('create survey data: ' + data)
  api.createSurvey(data)
    .then(ui.createSurveySuccess)
    .catch(ui.createSurveyFailure)
}

const onCreateQuestion = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createQuestion(data)
    .then(ui.createQuestionSuccess)
    .catch(ui.createQuestionFailure)
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

const onRevealAddQuestion = function (event) {
  console.log('events')
  $('form#create-survey').show()
}

const addHandlers = () => {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#create-question').on('submit', onCreateQuestion)
  $('#indexOfSurveys').on('click', onIndex)
  $('#getUserSurveys').on('click', onShowOneSurvey)
  $('#create-survey-nav').on('click', onRevealAddQuestion)
  $('#content').on('click', '.delete-survey-button', onDestroy)
  $('#content').on('click', '.show-questions-button', onGetQuestions)
  $('#content').on('submit', '.update-survey-by-id-form', onUpdate)
}

module.exports = {
  addHandlers
}
