'use strict'

const store = require('../store.js')
const api = require('./api.js')
const showSurveyHB = require('../surveyHandlebars.handlebars')

const refreshTable = () => {
  const showSurveyHtml = showSurveyHB({ surveys: store.userSurveys })
  console.log('refresh')
  $('#content').empty()
  $('#content').append(showSurveyHtml)
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
  setTimeout(function () { $('#message').text('') }, 2000)
}

const createSuccess = (data) => {
  console.log('create success')
  store.userSurveys = data.surveys
  refreshTable()
  $('input').val('')
  console.log(data)
  // burndown
}

const createFailure = (data) => {
  // burndown
  console.log(data, 'failed to create')
  // burndown
}

const indexOfSurveysSuccess = (data) => {
  if (data.surveys.length === 0) {
    userMessage('You have no surveys created.')
  }
  store.userSurveys = data.surveys
  refreshTable()

  // burndown
}

const indexOfSurveysFailure = (surveyId) => {
  store.userSurveys = surveyId.surveys
  console.log('failed to index')
  // burndown
}

const showSuccess = (response) => {
  // burndown
  console.log('success')
  console.log(response)
  // burndown
}

const showFailure = () => {
  // burndown
  console.log('failed to show')
  // burndown
}

const destroySuccess = () => {
  refreshTable()
  api.indexOfSurveys()
    .then(indexOfSurveysSuccess)
    .catch(indexOfSurveysFailure)
  console.log('successful deletion')
  // burndown
}

const destroyFailure = (data) => {
  // burndown
  console.log('deletion failed')
  // burndown
}

const updateSuccess = (surveyId) => {
  store.userSurveys = surveyId.surveys
  console.log(surveyId)
  console.log('successful update')
  refreshTable()
  api.indexOfSurveys()
    .then(indexOfSurveysSuccess)
    .catch(indexOfSurveysFailure)
  // burndown
}

const updateFailure = (data) => {
  store.userSurveys = data.surveys
  // burndown
}

module.exports = {
  createSuccess,
  createFailure,
  indexOfSurveysSuccess,
  indexOfSurveysFailure,
  showSuccess,
  showFailure,
  destroySuccess,
  destroyFailure,
  updateSuccess,
  updateFailure,
  refreshTable
}
