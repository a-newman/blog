import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import layoutStyles from "./layout.module.css"
import SewingMachineAsciiArt from "./sewing_machine_art"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const StyledTitle = () => (
  <h1 className={layoutStyles.title}>
    <span className={layoutStyles.titleFlouncy}>Annie Makes </span>
    <div className={layoutStyles.titleSpaceHolder}></div>
    <br />
    <div className={layoutStyles.titleSpaceHolder}></div>
    <span className={layoutStyles.titleTech}>Tech</span>
    <span className={layoutStyles.titleFlouncy}> Styles</span>
  </h1>
)

const Header = props => (
  <div className={layoutStyles.blogHeader} style={{ textAlign: `center` }}>
    <div className={layoutStyles.titleFlexBox}>
      <div>
        <SewingMachineAsciiArt />
      </div>
      <div>
        <Link className={layoutStyles.titleLink} to="/">
          <StyledTitle />
        </Link>
      </div>
    </div>
    {/* <hr className={layoutStyles.stitchingLine} /> */}
    <ul>
      <ListLink to="/">Posts</ListLink>
      <ListLink to="/about/">About</ListLink>
      {/* <ListLink to="/search/">Search</ListLink> */}
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
      <div className={layoutStyles.centerSection}>{children}</div>
    </div>
  )
}
