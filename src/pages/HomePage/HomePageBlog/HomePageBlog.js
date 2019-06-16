import React, {useEffect} from 'react'
import './HomePageBlog.css'
import {useStateValue} from '../../../store/StateContext'
// services
import {posts as postsService} from '../../../services/blog'
// components
import Post from '../HomePageBlogPost'


const HomePageBlog = () => {
  const [state, dispatch] = useStateValue()

  useEffect(() => {
    if (state.posts.length === 0) {
      postsService.getList()
      .then(posts => { dispatch({ type: 'setPosts', posts }) })
    }
  }, [dispatch, state.posts.length])

  const posts = state.posts && state.posts.map(post => (
    <Post
      key={post._id}
      id={post._id}
      title={post.title}
      author={post.author}
      content={post.content}
      image={post.image}
      date={post.date}
      />
  ))

  return (
    <div className="HomePageBlog-container">
      <h2 className="HomePageBlog-title">Our Blog</h2>
      {posts}
    </div>
  )
}

export default HomePageBlog
