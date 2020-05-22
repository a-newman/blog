import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const files = data.allFile.edges
  return (
    <Layout>
      <h2>My Site's Files</h2>
      <table>
        <thead>
          <tr>
            <th>relativePath</th>
            <th>birthTime</th>
          </tr>
        </thead>
        <tbody>
          {files.map(({ node }, idx) => (
            <tr key={idx}>
              <td>{node.relativePath}</td>
              <td>{node.birthTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`
