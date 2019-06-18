import React, {useEffect} from 'react'
import parse from 'csv-parse'
import './MenuPage.css'
// state
import {useStateValue} from '../../store/StateContext'
// components
import Dish from './MenuPageDish'

const parseCSV = csv => new Promise((resolve, reject) =>
  parse(csv, (err, output) => {
    if (err) {
      console.log('error', err)
      return reject(err)
    }

    const [headers, ...content] = output
    const reducer = (acc, val, p) => ({ ...acc, [headers[p]]: val })

    return resolve(content.map(row => row.reduce(reducer, {})))
  })
)

const fetchDishes = () => fetch('fixtures/dishes.csv')
  .then(res => res.text())
  .then(parseCSV)

const MenuPage = () => {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    fetchDishes()
      .then(dishes => { dispatch({ type: 'setDishes', dishes }) })
 }, [])

 const dishesView = state.dishes.map((dish, p) => (
   <Dish
    key={`dish-${p}`}
    title={dish.title}
    subtitle={dish.subtitle}
    content={dish.content}
    price={dish.price}
    />
 ))

  return (
    <div className="MenuPage-container">
      <header className="MenuPage-header">
        Hola
      </header>
      {dishesView}
    </div>
  )
}

export default MenuPage
