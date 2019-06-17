import React from 'react'
import './MenuPage.css'
// componets
import Dish from './MenuPageDish'

const MenuPage = () => (
  <div className="MenuPage-container container columns">
    <header className="MenuPage-header">
      Hola
    </header>
    <Dish />
    <Dish />
    <Dish />
    <Dish />
    <Dish />
    <Dish />
  </div>
)

export default MenuPage
