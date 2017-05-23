'use strict'
const store = require('../store.js')
const showSurveysHB = require('../surveyHandlebars.handlebars')
const api = require('./api.js')

const refreshTable = () => {
  const showSurveyHtml = showSurveysHB({ surveys: store.userSurveys })
  $('#content').empty()
  $('#content').append(showSurveyHtml)
}

const userMessage = (txt) => {
  const message = $('#message')[0]
  $(message).text(txt)
  setTimeout(function () { $('#message').text('') }, 2000)
}

const createSuccess = (data) => {
  store.userSurveys = data.surveys
  console.log('create success')
  console.log(data)
  refreshTable()
  // burndown
}

const createFailure = (error) => {
  // burndown
  console.log(error, 'failed to create')
  console.log(error)
  // burndown
}

const indexOfSurveysSuccess = (data) => {
  if (data.surveys.length === 0) {
    userMessage('You have no surveys.')
  }
  store.userSurveys = data.surveys
  console.log(data)
  console.log('success')
  refreshTable()
}

const indexOfSurveysFailure = () => {
  // burndown
  console.log('failed to index')
  // burndown
}

const showOneSurveySuccess = (data) => {
  // burndown
  console.log('success')
  console.log(data)
  if (data.surveys.length === 0) {
    userMessage('You have no surveys.')
  }
  store.userSurveys = data.surveys
  refreshTable()
}

const showOneSurveyFailure = (surveyId) => {
  console.log('failed to show')
  store.userSurveys = surveyId.surveys
}

const destroySuccess = () => {
  console.log('successful deletion')
  refreshTable()
  api.indexOfSurveys()
    .then(indexOfSurveysSuccess)
    .catch(indexOfSurveysFailure)
  // burndown
}

const destroyFailure = (data) => {
  // burndown
  console.log('deletion failed')
  // burndown
}

const updateSuccess = (surveyId) => {
  store.userSurveys = surveyId.surveys
  refreshTable()
  console.log(surveyId)
  console.log('successful update')
  api.update()
    .then(showOneSurveySuccess)
    .catch(showOneSurveyFailure)
}

const updateFailure = (data) => {
  console.log('update failed')
  store.userSurveys = data.surveys
}

module.exports = {
  createSuccess,
  createFailure,
  indexOfSurveysSuccess,
  indexOfSurveysFailure,
  showOneSurveySuccess,
  showOneSurveyFailure,
  destroySuccess,
  destroyFailure,
  updateSuccess,
  updateFailure,
  refreshTable
}
