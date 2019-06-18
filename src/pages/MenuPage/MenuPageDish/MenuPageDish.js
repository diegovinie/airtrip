import React from 'react'
import './MenuPageDish.css'
import {Icon} from 'react-fa'

const MenuPageDish = ({title, subtitle, content, price}) => (
  <div className="MenuPageDish-container">
    <div className="MenuPageDish-description">
      <h4 className="MenuPageDish-description-header">
        {title} <small className="MenuPageDish-description-header-subtitle">{subtitle}</small>
      </h4>
      <p className="MenuPageDish-description-content">{content}</p>
    </div>
    <div className="MenuPageDish-aside">
      <div className="MenuPageDish-aside-price">
        $ {price}
      </div>
      <div className="MenuPageDish-aside-photo">
        <Icon name="camera" />
      </div>
    </div>
    <div className="MenuPageDish-divider"></div>
  </div>
)

export default MenuPageDish
