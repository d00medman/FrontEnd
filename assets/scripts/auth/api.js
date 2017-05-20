const config = require('../config.js')

const index = () => {
  // console.log('success')
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'GET'
  })
}

module.exports = {
  index
}
