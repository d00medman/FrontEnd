'use strict'

const config = require('../config.js')
// const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signUpSuccess = (data) => {
  $('form#sign-in').show()
  $('form#sign-up').hide()
  $('#instruments-div').text('')
  $('div.error-handling').text('')
  document.getElementById('sign-up').reset()
}

const signUpFailure = () => {
  $('div.error-handling').text('Sign up error')
}
module.exports = {
  signUp,
  signUpSuccess,
  signUpFailure
  // index
}
