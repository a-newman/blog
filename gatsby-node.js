const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // This function creates the slug path and adds that piece of info
  // to the node
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slugPath = createFilePath({ node, getNode, basePath: `pages` })
    // This adds the key `slug` to the `fields` prop of this node
    createNodeField({
      node,
      name: `slug`,
      value: slugPath,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const mdPages = result.data.allMdx.edges
  mdPages.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
