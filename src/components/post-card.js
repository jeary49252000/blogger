import * as React from "react"
import { Link } from "gatsby"

export const PostCard = ({ title, date, author, slug }) => (
  <div className="post-card">
    <h2>{title}</h2>
    <p>{date}</p>
    <p>{author}</p>
    <Link to={`/blog/${slug}`}>Read more</Link>
  </div>
)
