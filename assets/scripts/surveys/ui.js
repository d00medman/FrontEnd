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
  // burndown
}

module.exports = {
  createSuccess,
  createFailure
  // indexSuccess,
  // indexFailure,
  // showSuccess,
  // showFailure,
  // destroySuccess,
  // destroyFailure,
  // updateSuccess,
  // updateFailure
}
