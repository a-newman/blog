/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({
  description,
  lang,
  meta,
  title,
  author,
  isArticle,
  url,
  image,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const seo = {
    description: description || site.siteMetadata.description,
    lang: lang,
    meta: meta,
    url: url
      ? `${site.siteMetadata.siteUrl}/${url}`
      : site.siteMetadata.siteUrl,
    title: title
      ? `${title} | ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    author: author || site.siteMetadata.author,
    type: isArticle ? "article" : "website",
    image: `${site.siteMetadata.siteUrl}${image}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `author`,
          content: seo.author,
        },
        {
          property: `og:title`,
          content: seo.title,
        },
        {
          property: `og:url`,
          content: seo.url,
        },
        {
          property: `og:description`,
          content: seo.description,
        },
        {
          property: `og:type`,
          content: seo.type,
        },
        {
          property: `og:image`,
          content: seo.image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: seo.author,
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  isArticle: false,
  image: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  author: PropTypes.string,
  isArticle: PropTypes.bool,
  url: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
