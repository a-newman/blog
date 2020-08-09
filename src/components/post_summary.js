import React from "react"
import { Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import postSummaryStyles from "./post_summary.module.css"

export default ({ post }) => {
  return (
    <div className={`${postSummaryStyles.container} shadowBox`}>
      <Link className={postSummaryStyles.titleLink} to={post.fields.slug}>
        <h3>
          <span>{post.frontmatter.title}</span>
        </h3>
      </Link>
      <h4>{post.frontmatter.date}</h4>
      <MDXRenderer onlyExcerpt={true}>{post.body}</MDXRenderer>

      <Link to={post.fields.slug} className={postSummaryStyles.readmore}>
        Read More <span className={postSummaryStyles.readmorespan}>></span>
      </Link>
      {/* <hr className={postSummaryStyles.divider} /> */}
    </div>
  )
}
