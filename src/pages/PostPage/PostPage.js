import React, {useEffect, useState} from 'react'
import './PostPage.css'
import {useStateValue} from '../../store/StateContext'
import {urls} from '../../services/api'
import {posts as postsService} from '../../services/blog'

const PostPage = ({match}) => {
  const [{posts}, ] = useStateValue()
  const [post, setPost] = useState(false)
  const id = match.params.id

  useEffect(() => {
    (async () =>
      setPost(posts.find(p => p._id === id) || await postsService.getOne(id))
    )()
  }, [posts, id])

  return post && (
    <main className="PostPage-container">
      <div className="PostPage-image">
        <img alt="" src={`${urls.host}${post.image}`} />
      </div>
      <p>
        <small>por: <b>{post.author.name}</b></small>
        <br />
        <small>
          {post.date && (new Date(post.date)).toLocaleDateString()}
        </small>
      </p>
      <h3>{post.title}</h3>
      <p className="PostPage-content">
        {post.content}
      </p>
    </main>
  )
}


export default PostPage
