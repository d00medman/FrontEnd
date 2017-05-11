
const api = require('./api')
const ui = require('./ui')

const onIndex = function () {
  event.preventDefault()
  api.index()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}


const addHandlers = () => {
  $('#index').on('click' onIndex)
}
