import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import postSummaryStyles from "./post_summary.module.css"
import Img from "gatsby-image"

const PostHeaderImage = props => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const img = data.images.edges.find(n =>
    n.node.relativePath.includes(props.imname)
  )
  if (!img) {
    return null
  }

  return <Img alt={props.alt} fluid={img.node.childImageSharp.fluid} />
}

export default ({ post }) => {
  console.log("frontmatter", post.frontmatter)
  return (
    <div className={postSummaryStyles.container}>
      <Link className={postSummaryStyles.titleLink} to={post.fields.slug}>
        <h3>{post.frontmatter.title}</h3>
      </Link>
      <h4>{post.frontmatter.date}</h4>
      {post.frontmatter.cover && (
        <PostHeaderImage
          imname={post.frontmatter.cover}
          alt="gatsby astronaut"
        />
      )}
      <p>{post.excerpt}</p>
      <Link to={post.fields.slug}>Read More >></Link>
      <hr />
    </div>
  )
}
