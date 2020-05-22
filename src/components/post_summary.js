import React from "react"
import { Link } from "gatsby"

export default ({ post }) => {
  console.log("frontmatter", post.frontmatter)
  return (
    <div
      style={{
        borderBottom: `1px solid grey`,
        paddingBottom: `2em`,
      }}
    >
      <Link to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      <h4>{post.frontmatter.date}</h4>
      {post.frontmatter.cover && (
        <img src={"images/" + post.frontmatter.cover} />
      )}
      <p>{post.excerpt}</p>
      <Link to={post.fields.slug}>Read More >></Link>
    </div>
  )
}
