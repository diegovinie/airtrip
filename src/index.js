import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import 'bulma-accordion'
import App from './App'
// state
import {initialState, reducer} from './store/state'
import {StateProvider} from './store/StateContext'

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>, document.getElementById('root'))
