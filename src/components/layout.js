import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
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
  <div
    className={`${layoutStyles.blogHeader} shadowBox`}
    style={{ textAlign: `center` }}
  >
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
    <ul className={layoutStyles.navLinks}>
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

  // This updated wrapper filters out all components after the component
  // <hr endexcerpt/> if onlyExcerpt is set to true
  // Technique from:
  // https://github.com/gatsbyjs/gatsby/issues/16865#issuecomment-612256713
  const mdxProviderComponents = {
    wrapper: ({ onlyExcerpt = false, children }) => {
      let updatedChildren = [...children]
      if (onlyExcerpt) {
        let afterExcerpt = false
        // filter out everything after <hr endexcerpt/>
        updatedChildren = children.filter(child => {
          const isDivider = child.props && child.props["endexcerpt"]
          if (isDivider) {
            afterExcerpt = true
          }
          return !afterExcerpt
        })
      }
      return <>{updatedChildren}</>
    },
  }

  return (
    <MDXProvider components={mdxProviderComponents}>
      <div className={layoutStyles.backgroundDimmer}></div>
      <div>
        <div className={layoutStyles.centerSection}>
          <Header title={title} />
          {children}
        </div>
      </div>
    </MDXProvider>
  )
}
