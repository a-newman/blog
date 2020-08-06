import React from "react"
import Layout from "../components/layout"
import CommentBox from "../components/comment_box.js"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styles from "./blog-post.module.css"

export default ({ data }) => {
  console.log("data", data)
  const post = data.mdx
  console.log("post", post)
  return (
    <Layout>
      <div className={"shadowBox"}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
        <MDXRenderer>{post.body}</MDXRenderer>
        <CommentBox slug={post.slug} title={post.frontmatter.title} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
      slug
    }
  }
`
