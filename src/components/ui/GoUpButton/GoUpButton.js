import React, {useState, useEffect} from 'react'
import {Icon} from 'react-fa'
import './GoUpButton.css'

const GoUpButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', e => {
      setIsDisplayed(window.scrollY > 0)
    })
  }, [])

  const handleClick = e => { window.scrollTo(0, 0) }

  return isDisplayed && (
    <button
      onClick={handleClick}
      className="GoUpButton">
      <Icon name="chevron-up" />
    </button>
  )
}

export default GoUpButton
