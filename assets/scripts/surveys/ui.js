'use strict'

const store = require('../store.js')
const api = require('./api.js')
// const showSurveyHB = require('../surveyHandlebars.handlebars')
const showQuestionHB = require('../questionsHandlebars.handlebars')
const unauthUserSurveyHB = require('../surveyHandlebars.handlebars')
const authUserSurveyHB = require('../authUserHandlebars.handlebars')
const answerableSurveyHB = require('../answerableSurvey.handlebars')
const editableSurveyHB = require('../editableSurveys.handlebars')
const showQuestionHeaderHB = require('../questionsheaderHandlebars.handlebars')

const createSurveySuccess = (response) => {
  store.surveyID = response.survey.id
  const showQuestionHtml = showQuestionHeaderHB({ surveys: response })
  $('form#create-survey').hide()
  $('form#create-question').show()
  $('#content').html(showQuestionHtml)
  $('#handlebar-target').html('')
  $('.alert').text('You have created a new survey titled ' + response.survey.title)
  document.getElementById('create-survey').reset()
}

const createSurveyFailure = (error) => {
  $('.alert').text('You have failed to create a new survey')
}

const createQuestionSuccess = (response) => {
  $('.alert').text('You have added the question "' + response.question.prompt + '" to this survey')
  const showQuestionHtml = showQuestionHB({ questions: response })
  $('#content').append(showQuestionHtml)
  document.getElementById('create-question').reset()
}

const indexOfSurveysSuccess = (data) => {
  $('#handlebar-target').text('')
  $('form').hide()
  if (data.surveys.length === 0) {
    $('.alert').text('There are no surveys to take.')
  }
  const unauthUserSurveyHtml = unauthUserSurveyHB({ surveys: data.surveys })
  $('#handlebar-target').html(unauthUserSurveyHtml)
}

const indexOfSurveysFailure = (surveyId) => {
  $('.alert').text('Unable to retrieve data.')
}

const showAuthUserSurveysSuccess = (data) => {
  $('form').hide()
  const answerableSurveyHtml = authUserSurveyHB({ surveys: data.survey })
  $('#handlebar-target').html(answerableSurveyHtml)
}

const showAuthUserSurveysFailure = (data) => {
  $('.alert').text('Unable to retrieve data.')
}

const destroySuccess = () => {
  api.showAuthUserSurveys()
    .then(showAuthUserSurveysSuccess)
    .catch(showAuthUserSurveysFailure)
  $('.alert').text('successful survey deletion')
}

const destroyFailure = (data) => {
  $('.alert').text('survey deletion failed')
}

const updateSuccess = (surveyId) => {
  api.showAuthUserSurveys()
    .then(showAuthUserSurveysSuccess)
    .catch(showAuthUserSurveysFailure)
}

const updateFailure = (data) => {}

const takeSurveySuccess = (data) => {
  if (data.question.length === 0) {
    $('.alert').text('There are no questions to answer.')
  }
  const answerableSurvey = answerableSurveyHB({ questions: data.question })
  $('#handlebar-target').html(answerableSurvey)
}

const takeSurveyFailure = (data) => {
  $('.alert').text('Unable to return questions from Server')
}

const surveyQuestionsSuccess = (data) => {
  const editableSurvey = editableSurveyHB({ questions: data.question })
  $('#handlebar-target').html(editableSurvey)
}

const surveyQuestionsFailure = (data) => {
  $('.alert').text('Unable to return questions from Server')
}

const answerSuccess = (data) => {
  const targ = document.getElementById(data._id)
  $(targ).hide()
  $('.alert').text('answer logged')
}

const answerFailure = (data) => {
  $('.alert').text('failure to log answers')
}

const extractVal = (data) => {
  let layer = Object.values(data)
  layer = Object.values(layer[0])
  return layer[0]
}

const getQuestionDataSuccess = (data) => {
  let yes = 0
  let no = 0
  for (let i = 0; i < data.question.results.length; i++) {
    extractVal(data.question.results[i]) === true ? yes++ : no++
  }
  $('.alert').text(`The question '${data.question.prompt}' has been answered ${data.question.results.length} times. It got a yes ${yes} times and a no ${no} times.`)
}

const getQuestionDataFailure = (data) => {
  $('.alert').text('failure to return question')
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
  showAuthUserSurveysFailure,
  takeSurveySuccess,
  takeSurveyFailure,
  answerSuccess,
  answerFailure,
  surveyQuestionsSuccess,
  surveyQuestionsFailure,
  getQuestionDataSuccess,
  getQuestionDataFailure
}
