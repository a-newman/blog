import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import PostSummary from "../components/post_summary.js"
//import SEO from "../components/seo"

export default ({ data }) => {
  console.log("data", data);
  const mdPages = data.allMarkdownRemark.edges;
return (<Layout>
    <div>
      { mdPages.map(({ node }, idx) => (
        <PostSummary post={node} key={idx}/>
      ))}
    </div>
  </Layout>)
}

export const query = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        id
        excerpt(pruneLength: 100)
        html
        tableOfContents(absolute: false)
        frontmatter {
          title
          cover
          date(formatString: "MMMM DD, YYYY")
          status
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}`
