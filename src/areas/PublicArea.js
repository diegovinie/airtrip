import React from 'react'
import {Route} from 'react-router-dom'
// pages
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
// components
import TheMenu from '../components/layout/TheMenu'

const PublicArea = () => (
  <section style={{ flex: '1 0 auto' }}>
    <div className="App-menu">
      <TheMenu />
    </div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/posts/:id" component={PostPage} />
  </section>
)

export default PublicArea
