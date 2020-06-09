import React from "react"
import { Link } from "gatsby"
import postSummaryStyles from "./post_summary.module.css"

export default ({ post }) => {
  console.log("frontmatter", post.frontmatter)
  return (
    <div className={postSummaryStyles.container}>
      <Link className={postSummaryStyles.titleLink} to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      <h4>{post.frontmatter.date}</h4>
      {post.frontmatter.cover && (
        <img src={"images/" + post.frontmatter.cover} />
      )}
      <p>{post.excerpt}</p>
      <Link to={post.fields.slug}>Read More >></Link>
      <hr />
    </div>
  )
}
