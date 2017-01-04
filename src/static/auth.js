/* globals localStorage */

export default {
  // TODO: Check returns  
  login (http, username, password) {
    http.post('/api/login', {
      username: username,
      password: password
    }).then((response) => {
      if (response.body.success) {
        localStorage.accessKey = response.body.accessKey
        return true
      }
      return false
    }, (response) => {
      return false
    })
  },
  logout () {
    delete localStorage.accessKey
    return
  },
  register () {
    return
  },
  loggedIn () {
    return !!localStorage.accessKey
  }
}
