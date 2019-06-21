import React, {useEffect} from 'react'
import parse from 'csv-parse'
import './MenuPage.css'
// state
import {useStateValue} from '../../store/StateContext'
// components
import Dish from './MenuPageDish'

const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

const grouper = prop => (acc, item) => {
  const key = item[prop]
  acc[key] = (acc[key] || []).concat(item)
  return acc
}

const groupBy = items => prop =>
  Array.isArray(items)
    ? items.reduce(grouper(prop), {})
    : {}

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

  const toggleAccordion = e => {
    e.target.parentElement.classList.toggle('is-active')
  }

  const createDishView = (dish, key) =>(
   <Dish
    key={`dish-${dish.title}-${key}`}
    title={dish.title}
    subtitle={dish.subtitle}
    content={dish.content}
    price={dish.price}
    />
 )

  const dishesBySectionsView = items => Array.isArray(items)
    && Object.entries(groupBy(items)('section'))
      .map(([section, sections]) => (
        <div
          key={section}
          className="MenuPage-section accordion is-active" >
          <h3 onClick={toggleAccordion} className="title accordion-header toggle">{section}</h3>
          <div className="accordion-body">
            <div className="accordion-content">
            {Object.entries(groupBy(sections)('category'))
              .map(([cat, cats]) => (
                <div
                  key={cat}
                  className="MenuPage-section-category" >
                <h4 className="title">{cat}</h4>
                  {cats.map(createDishView)}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))

  return (
    <div className="MenuPage-container">
      <header className="MenuPage-header">
        <div className="MenuPage-header-row">
          <div className="MenuPage-header-row-col left">
            Pick Up
            <br />
            305-354-2266
          </div>
          <div className="MenuPage-header-row-col center"></div>
          <div className="MenuPage-header-row-col right">
            Parking In Rear
            <br />
            ATM Inside
          </div>
        </div>
        <div className="MenuPage-header-row">
          <strong>Open Mon. to Sat. 7 am to 8 pm</strong>
          <br />
          <strong>Grand Island Square Apartments Building, 1501 NE, 167 St. North Miami Beach, Fl 33162</strong>
        </div>
        <div className="MenuPage-header-row">
          All prices include taxes
        </div>
      </header>
      <div className="accordions">
        {dishesBySectionsView(state.dishes)}
      </div>
    </div>
  )
}

export default MenuPage
