const path = require("path")
// dynamic page creation
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query getProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)

  res.data.products.nodes.forEach(node =>
    createPage({
      path: `/products/${node.slug}`,
      component: path.resolve(`src/templates/productTemplate.js`),
      context: {
        slug: node.slug,
      },
    })
  )
}
