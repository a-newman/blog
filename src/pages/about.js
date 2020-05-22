import React from "react"
import { graphql } from "gatsby" 

import Layout from "../components/layout.js"

export default ({ data }) => (
  <Layout>
    <div>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>Keep posted for more details!</p>
    </div>
  </Layout>
)

// this syntax: var`str` is a "tagged template" in JS
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
