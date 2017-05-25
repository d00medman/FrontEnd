'use strict'
const store = require('../store.js')
// const api = require('./api.js')
// const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  $('.alert').text('You have successfully signed up')
  document.getElementById('sign-up').reset()
}

const signUpFailure = () => {
  $('.alert').text('You have failed to sign up')
}

const signInSuccess = (data) => {
  store.user = data.user

  $('.alert').text('You have successfully signed in')
  $('#sign-in-nav').hide()
  $('#sign-up-nav').hide()
  $('form#sign-up').hide()
  $('form#sign-in').hide()
  $('a.dropdown-toggle').css('visibility', 'visible')
  $('#indexOfSurveys').hide()
  $('#indexOfUserSurveys').show()
  $('#create-survey-nav').show()
  $('#handlebar-target').html('')

//   document.getElementById('sign-in').reset()
//   $('button#nav-add-instrument').show()
//   $('button#nav-sign-up').hide()
//   $('button#nav-sign-in').hide()
//   $('form#sign-in').hide()
//   $('button#sign-out').show()
//   $('button#view-instruments').show()
//   $('button#nav-change-password').show()
//   $('div.error-handling').text('')
}

const signInFailure = (data) => {
  $('.alert').text('You have failed to sign in')
}

const signOutSuccess = (data) => {
  $('#sign-in-nav').show()
  $('#sign-up-nav').show()
  $('a.dropdown-toggle').css('visibility', 'invisible')
  $('#indexOfSurveys').show()
  $('#indexOfUserSurveys').hide()
  $('#create-survey-nav').hide()
  $('form').hide()
  $('#handlebar-target').html('')
  $('.alert').text('You have signed out')
}

const signOutFailure = (data) => {
  $('.alert').text('You have failed to sign out')
  document.querySelector('.core').style.visibility = 'hidden'
}

const changePasswordSuccess = (data) => {
  $('#handlebar-target').text('Password changed')
}

const changePasswordFailure = () => {
  $('#handlebar-target').text('Change Password error')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
