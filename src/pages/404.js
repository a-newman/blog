import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page not found" />
    <div class="shadowBox">
      <h1>404: Page not found</h1>
      <p>Uh-oh...looks like we've got some loose threads here.</p>
    </div>
  </Layout>
)

export default NotFoundPage
