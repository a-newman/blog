import React from "react"

import Emoji from "../components/emoji.js"
import Layout from "../components/layout.js"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title={"About"} />
    <div className={"shadowBox"}>
      <h1>About the blog</h1>
      <p>
        Hi fellow sewists and techies! My name is Anelise (but you can call me
        Annie).
      </p>
      <p>
        I'm a graduate student in Computer Science, but I've been sewing since
        well before I was coding. I learned to sew from my mom right before
        starting high school (so I was 13 <Emoji name="open_mouth" />
        ). I've been making my own clothes ever since.
      </p>
    </div>
  </Layout>
)
