import React from "react"
import Layout from "../components/layout"
import CommentBox from "../components/comment_box.js"
import { graphql } from "gatsby"
import styles from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={"shadowBox"}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <CommentBox slug={post.fields.slug} title={post.frontmatter.title} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
