'use strict'
const store = require('../store.js')
// const api = require('./api.js')
// const getFormFields = require(`../../../lib/get-form-fields`)

const signUpSuccess = (data) => {
  console.log('sign-up ', data)
  document.getElementById('sign-up').reset()
}

const signUpFailure = () => {
  console.log('signUpFailure')
}

const signInSuccess = (data) => {
  console.log('signInSuccess')
  store.user = data.user
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
  console.log('signInFailure ui')
  // $('div.error-handling').text('Sign in error')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
