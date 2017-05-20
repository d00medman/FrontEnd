const signUpSuccess = (data) => {
  console.log(data)
  document.getElementById('sign-up').reset()
}

const signUpFailure = () => {
  console.log('signUpFailure')
}
module.exports = {
  signUpSuccess,
  signUpFailure
}
