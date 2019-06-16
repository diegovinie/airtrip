import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css'
// state
import {useStateValue} from './store/StateContext'
// services
import auth from './services/auth'
import {api} from './services/api'
// areas
import PublicArea from './areas/PublicArea'
import AdminArea from './areas/AdminArea'
// components
import TheFooter from './components/layout/TheFooter'
import GoUpButton from './components/ui/GoUpButton'


const App = () => {
  const [, dispatch] = useStateValue()

  useEffect(() => {
    auth.driver.onAuthStateChanged(user => {
      if (user) {
        console.log('logged', user.email)
        auth.driver.currentUser.getIdToken()
          .then(token => {
            dispatch({ type: 'login' })
            api.headers.add('authorization', 'bearer ' + token)
          })
          .catch(err => { console.log('err', err) })
      } else {
        dispatch({ type: 'logout' })
        api.headers.remove('authorization')
      }
    })
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin" component={AdminArea} />
          <Route path="/" component={PublicArea} />
        </Switch>
        <TheFooter />
      </Router>
      <GoUpButton />
    </div>
  )
}

export default App
