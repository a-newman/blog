import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import postSummaryStyles from "./post_summary.module.css"
import Img from "gatsby-image"

export default ({ post }) => {
  return (
    <div className={`${postSummaryStyles.container} shadowBox`}>
      <Link className={postSummaryStyles.titleLink} to={post.fields.slug}>
        <h3>
          <span>{post.frontmatter.title}</span>
        </h3>
      </Link>
      <h4>{post.frontmatter.date}</h4>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />

      <Link to={post.fields.slug} className={postSummaryStyles.readmore}>
        Read More <span className={postSummaryStyles.readmorespan}>></span>
      </Link>
      {/* <hr className={postSummaryStyles.divider} /> */}
    </div>
  )
}
