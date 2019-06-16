import React, {useState, useRef} from 'react'
import './LoginForm.css'
// services
import auth from '../../../services/auth'

const LoginForm = ({done, formType='login'}) => {
  const errorRef = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [actionButtonLabel, setActionButtonLabel] = useState('enviar')
  const [errorMessage, setErrorMessage] = useState('error!')

  const handleNameChange = e => {
    setName( e.target.value)
  }

  const handleEmailChange = e => {
    setEmail( e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword( e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setActionButtonLabel('enviando...')
  }

  const handleErrors = err => {
    setActionButtonLabel('error!')
    setErrorMessage(err.message)
    errorRef.current.classList.add('show')

    setTimeout(() => {
      setActionButtonLabel('enviar')
      errorRef.current.classList.remove('show')
    }, 3000)
  }

  const handleLogin = e => {
    handleSubmit(e)
    auth.login({ email, password })
      .then(() => {
        setActionButtonLabel('enviar')
        done()
      })
      .catch(handleErrors)
  }

  const handleRegister = e => {
    handleSubmit(e)
    auth.register({ email, password })
      .then(() => {
        setActionButtonLabel('gracias!')

        setTimeout(() => {
          setActionButtonLabel('enviar')
          done()
        }, 2000)
      })
      .catch(handleErrors)
  }

  return (
    <form className="form">
      <h2 className="form-title">
        {formType === 'login' ? 'Log In' : 'Sign Up'}
      </h2>
      {
        formType === 'register' &&
          <div className="form-field">
            <input
              className="form-input"
              placeholder="nombre..."
              name="name"
              value={name}
              onChange={handleNameChange}
              type="text" />
            <div className="form-input-error">
              <span>Error!</span>
            </div>
          </div>
      }
      <div className="form-field">
        <input
          className="form-input"
          placeholder="email..."
          name="email"
          value={email}
          onChange={handleEmailChange}
          type="email" />
        <div className="form-input-error">
          <span>Error!</span>
        </div>
      </div>
      <div className="form-field">
        <input
          className="form-input"
          placeholder="contraseña..."
          name="password"
          value={password}
          onChange={handlePasswordChange}
          type="password" />
        <div className="form-input-error">
          <span>Error!</span>
        </div>
      </div>
      <div className="form-buttons">
        <button onClick={formType === 'login' ? handleLogin : handleRegister}>
          {actionButtonLabel}
        </button>
        <div ref={errorRef} className="form-input-error">
          <span>{errorMessage}</span>
        </div>
      </div>
    </form>
  )
}

export default LoginForm
