const path = require(`path`)
const { graphql } = require(`gatsby`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: createFilePath({
        node,
        getNode,
        basePath: 'content/actions',
      }),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(fields: { slug: { eq: $slug } }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              embed
              script
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/action.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}