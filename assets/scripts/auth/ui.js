const indexSuccess = (response) => {
  $('#message').text("You're good")
  console.log('Success')
}

const indexFailure = (response) => {
  console.log('Failure')
}

module.exports = {
  indexSuccess,
  indexFailure
}
