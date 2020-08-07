import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import PostSummary from "../components/post_summary.js"
//import SEO from "../components/seo"

export default ({ data }) => {
  const mdPages = data.allMdx.edges
  return (
    <Layout>
      <div>
        {mdPages.map(({ node }, idx) => (
          <PostSummary post={node} key={idx} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
          body
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
  }
`
