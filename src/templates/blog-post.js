import React from "react"
import Layout from "../components/layout"
import CommentBox from "../components/comment_box.js"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styles from "./blog-post.module.css"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <SEO
        description={post.frontmatter.description}
        title={post.frontmatter.title}
        isArticle={true}
        url={post.slug}
      />
      <div className={"shadowBox"}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <h4 className={styles.date}>{post.frontmatter.date}</h4>
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
        description
        date(formatString: "MMMM DD, YYYY")
      }
      slug
    }
  }
`
