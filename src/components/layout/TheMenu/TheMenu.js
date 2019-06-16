import React, {useState} from 'react'
import {Route, Link} from 'react-router-dom'
import { Icon } from 'react-fa'
import cx from 'classnames'
import './TheMenu.css'
// state
import {useStateValue} from '../../../store/StateContext'
// services
import auth from '../../../services/auth'
// components
import Dialog from './TheMenuDialog'
import LoginForm from '../../ui/LoginForm'
import GoBackButton from '../../ui/GoBackButton'

const TheMenu = () => {
  const [state] = useStateValue()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDialogShowed, setIsDialogShowed] = useState(false)
  const [formType, setFormType] = useState('login')

  const toggleExpand = e => {
    setIsExpanded(!isExpanded)
  }

  const handleLogin = e => {
    if (state.isAuth) {
      auth.logout()
    } else {
      setFormType('login')
      setIsDialogShowed(true)
    }
  }

  const handleSignUp = e => {
    setFormType('register')
    setIsDialogShowed(true)
  }

  const handleCloseDialog = e => {
    setIsDialogShowed(false)
  }

  const itemsContainerClasses = cx({
    'TheMenu-items-container': true,
    'expanded': isExpanded
  })


  return (
    <nav className="TheMenu-container">
      <div className="TheMenu-menu">
        <div className="TheMenu-menu-left">
          <Route path="/:a/:b?" component={GoBackButton} />
        </div>
        <div className="TheMenu-menu-space"></div>
        <Icon
          onClick={toggleExpand}
          className="TheMenu-menu-icon"
          name={isExpanded ? 'times' : 'bars'} />
      </div>
      <div className={itemsContainerClasses}>
        <ul className="TheMenu-items-list">
          {state.isAuth && (
            <li className="item">
              <Link to="/">Profile</Link>
            </li>
          )}
          <li className="item">
            {state.isAuth ?
              <Link to="/admin">Admin</Link>
              :
              <span onClick={handleSignUp}>Sign Up</span>
            }
          </li>
          <li onClick={handleLogin} className="item">
            <Link to="/" disabled>{state.isAuth ? 'Log Out' : 'Log In'}</Link>
          </li>
        </ul>
        <div className="TheMenu-social">
          <Icon className="TheMenu-social-icon" name="facebook" />
          <Icon className="TheMenu-social-icon" name="instagram" />
          <Icon className="TheMenu-social-icon" name="youtube" />
        </div>
      </div>
      <Dialog active={isDialogShowed} close={handleCloseDialog}>
        <LoginForm done={handleCloseDialog} formType={formType} />
      </Dialog>
    </nav>
  )
}

export default TheMenu
