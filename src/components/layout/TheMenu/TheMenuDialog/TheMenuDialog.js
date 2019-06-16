import React from 'react'
import { Icon } from 'react-fa'
import cx from 'classnames'
import './TheMenuDialog.css'

const TheMenuDialog = ({active, close, children}) => {
  const containerClasses = cx({
    'TheMenuDialog-container': true,
    'show': active
  })

  return (
    <div className={containerClasses}>
      <Icon
        onClick={close}
        className="TheMenuDialog-close"
        name="times" />
      {children}
    </div>
  )
}

export default TheMenuDialog
