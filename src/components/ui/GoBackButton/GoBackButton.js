import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'react-fa'
import './GoBackButton.css'

const GoBackButton = () => {

  return (
    <Link to="/" className="GoBackButton">
      <Icon name="arrow-left" />
    </Link>
  )
}

export default GoBackButton
