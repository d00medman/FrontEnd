'use strict'

const createSuccess = (response) => {
  // burndown
  console.log('success')
  console.log(response)
  // burndown
}

const createFailure = (error) => {
  // burndown
  console.log('failed to create')
  console.log(error)
  // burndown
}

const indexSuccess = (response) => {
  // burndown
  console.log(response)
  console.log('success')
  // burndown
}

const indexFailure = (error) => {
  // burndown
  console.log('failed to index')
  // burndown
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure
  // showSuccess,
  // showFailure,
  // destroySuccess,
  // destroyFailure,
  // updateSuccess,
  // updateFailure
}
