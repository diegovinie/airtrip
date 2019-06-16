import firebase from 'firebase'
import config from '../config'

firebase.initializeApp(config.firebase)

const handleErrors = action => err =>
  console.warn(action, err.code, err.message) ||
  Promise.reject(err)

export const auth = firebase.auth()

export default {
  login: ({email, password}) =>
    auth.signInWithEmailAndPassword(email, password)
      .then(res => { console.log('login ok') })
      .catch(handleErrors('login')),

  logout: () => auth.signOut()
    .then(res => { console.log('logout ok') })
    .catch(handleErrors('logout')),

  register: ({email, password}) =>
    auth.createUserWithEmailAndPassword(email, password)
    .then(res => { console.log('register ok') })
    .catch(handleErrors('register')),

  driver: auth
}
