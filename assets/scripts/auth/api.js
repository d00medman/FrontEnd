const config = require('../config.js')

const index = () => {
  // console.log('success')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET'
  })
}

module.exports = {
  index
}
