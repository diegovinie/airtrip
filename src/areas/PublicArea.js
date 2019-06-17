import React from 'react'
import {Route, Switch} from 'react-router-dom'
// pages
import HomePage from '../pages/HomePage'
import PostPage from '../pages/PostPage'
import MenuPage from '../pages/MenuPage'
// components
import TheMenu from '../components/layout/TheMenu'

const PublicArea = () => (
  <section style={{ flex: '1 0 auto' }}>
    <div className="App-menu">
      <TheMenu />
    </div>
    <Switch>
      <Route exact path="/menu" component={MenuPage} />
      <Route exact path="/posts/:id" component={PostPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </section>
)

export default PublicArea
