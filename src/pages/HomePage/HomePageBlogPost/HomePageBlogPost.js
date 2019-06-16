import React from 'react'
import {Link} from 'react-router-dom'
import './HomePageBlogPost.css'
import {urls} from '../../../services/api'

const cropContent = content => content && content.substr(0, 160)


const HomePageBlogPost = ({id, title, content, image, date, author}) => (
  <article className="HomePageBlogPost-container">
    <div className="HomePageBlogPost-image">
      <img alt="" src={`${urls.host}${image}`} />
    </div>
    <p>
      <small>por: <b>{author.name}</b></small>
      <br />
      <small>
        {date && (new Date(date)).toLocaleDateString()}
      </small>
    </p>
    <h3>{title}</h3>
    <p className="HomePageBlogPost-content">
      {cropContent(content)}
      <Link
        to={`/posts/${id}`}
        className="HomePageBlogPost-content-more">
        <b> ...más</b>
      </Link>
    </p>
  </article>
)

export default HomePageBlogPost
