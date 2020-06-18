import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styles from "./blog-post.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log("post", post)
  return (
    <Layout>
      <div className={"shadowBox"}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
    }
  }
`
