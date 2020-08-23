import React from "react"

import Layout from "../components/layout.js"
import SEO from "../components/seo"
import SewingMachineAsciiArt from "../components/sewing_machine_art"

export default ({ data }) => (
  <Layout>
    <SEO
      title={"Logo"}
      description={"Just a place where I can play around with my 'logo'"}
    />
    <div className={"shadowBox"}>
      <h1>Site Logo</h1>
      <SewingMachineAsciiArt />
    </div>
  </Layout>
)
