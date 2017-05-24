'use strict'

const store = require('../store.js')
const api = require('./api.js')
const unauthUserSurveyHB = require('../surveyHandlebars.handlebars')
const authUserSurveyHB = require('../authUserHandlebars.handlebars')
// const answerableSurveyHB = require('../answerableSurvey.handlebars')
// const editableSurveyHB = require('../editableSurveys.handlebars')

const createSurveySuccess = (response) => {
  store.surveyID = response.survey.id
  console.log('store.surveyID' + store.surveyID)
  console.log('success')
  console.log(response)
}

const createSurveyFailure = (error) => {
  console.log('failed to create')
  console.log(error)
}

const createQuestionSuccess = (response) => {
  console.log('success')
  console.log(response)
}

const indexOfSurveysSuccess = (data) => {
  console.log(data)
  if (data.surveys.length === 0) {
    $('#user-message').text('There are no surveys to take.')
  }
  const unauthUserSurveyHtml = unauthUserSurveyHB({ surveys: data.surveys })
  $('#handlebar-target').html(unauthUserSurveyHtml)
}

const indexOfSurveysFailure = (surveyId) => {
  $('#user-message').text('Server ping failed.')
}

const showAuthUserSurveysSuccess = (data) => {
  const answerableSurveyHtml = authUserSurveyHB({ surveys: data.survey })
  $('#handlebar-target').html(answerableSurveyHtml)
}

const showAuthUserSurveysFailure = (data) => {
  console.log('failed to show user surveys', data)
}

const destroySuccess = () => {
  api.indexOfSurveys()
    .then(indexOfSurveysSuccess)
    .catch(indexOfSurveysFailure)
  console.log('successful deletion')
}

const destroyFailure = (data) => {
  console.log('deletion failed')
}

const updateSuccess = (surveyId) => {
  console.log(surveyId)
  console.log('successful update')
  api.showAuthUserSurveys()
    .then(showAuthUserSurveysSuccess)
    .catch(showAuthUserSurveysFailure)
}

const updateFailure = (data) => {
}

module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  createQuestionSuccess,
  indexOfSurveysSuccess,
  indexOfSurveysFailure,
  destroySuccess,
  destroyFailure,
  updateSuccess,
  updateFailure,
  showAuthUserSurveysSuccess,
  showAuthUserSurveysFailure
}
