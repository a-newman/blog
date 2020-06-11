import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import layoutStyles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = props => (
  <div className={layoutStyles.blogHeader} style={{ textAlign: `center` }}>
    <Link to="/">
      <h1 className={layoutStyles.title}>{props.title}</h1>
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
      <div style={{ maxWidth: `75%`, margin: `0 auto` }}>{children}</div>
    </div>
  )
}
