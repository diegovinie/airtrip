import React from 'react'
import './HomePage.css'
// components
import Carousel from './HomePageCarousel'
import Blog from './HomePageBlog'

const HomePage = () => (
  <div className="HomePage-container">
  <header className="HomePage-carousel">
    <Carousel />
  </header>
  <main className="HomePage-blog">
    <Blog />
  </main>
  </div>
)

export default HomePage
