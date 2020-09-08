import React from "react"

import Emoji from "../components/emoji.js"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default ({ data }) => (
  <Layout>
    <SEO title={"About"} />
    <div className={"shadowBox"}>
      <h1>About the blog</h1>
      <p>
        Hi fellow sewists and techies! My name is Anelise (but you can call me
        Annie).
      </p>
      <Img fluid={data.file.childImageSharp.fluid} alt="A picture of me" />
      <p></p>
      <p>
        I'm a PhD student in Computer Science, but I've been sewing since well
        before I was coding. I learned to sew from my mom right before starting
        high school (so I was 13 <Emoji name="open_mouth" />
        ). I've been making my own clothes ever since. This blog is where I
        share my makes and blog about the overlap between fashion, blogging, and
        tech. Enjoy!
      </p>
      <p>
        You can also{" "}
        <a href="https://www.instagram.com/anniemakestechstyles/">
          follow me on Instagram @anniemakestechstyles!
        </a>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "images/me_4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
