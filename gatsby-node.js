const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { get, each } = require('lodash')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    createNodeField({
      node,
      name: `slug`,
      value: createFilePath({
        node,
        getNode,
        basePath: 'content',
      }),
    })

    const parent = getNode(get(node, 'parent'));
    createNodeField({
      node,
      name: 'collection',
      value: get(parent, 'sourceInstanceName')
    });
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  each(['post', 'action', 'press'], async type => {
    const result = await graphql(`
      query {
        allMarkdownRemark(filter: {
          fields: {
            collection: { eq: "${type}" }
          }
        }) {
          edges {
            node {
              id
              frontmatter {
                title
                description
                content
                actionId
                action
              }
              fields {
                slug
                collection
              }
            }
          }
        }
      }
    `)

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const slug = `${type}${node.fields.slug}`

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/${type}.js`),
        context: {
          slug,
          data: {
            ...node.frontmatter,
            ...node.fields,
          },
        },
      })
    })
  })
}