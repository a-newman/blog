import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = props => (
  <div className="blog-header" style={{ textAlign: `center` }}>
    <Link to="/">
      <h1>{props.title}</h1>
    </Link>
    <ul>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/search/">Search</ListLink>
    </ul>
  </div>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const title = data.site.siteMetadata.title

  return (
    <div>
      <Header title={title} />
      {/* <div class="blog-header">
        <h1 style={{ display: `inline` }}>{title}</h1>
        <ul style={{ listStyle: `none` }}>
          <ListLink to="/">{title}</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </div> */}
      <div style={{ maxWidth: `75%`, margin: `0 auto` }}>{children}</div>
    </div>
  )
}
