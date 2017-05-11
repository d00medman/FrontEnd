const index = () => {
  // console.log('success')
  return $.ajax({
    url: config.apiOrigin + '/workouts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
