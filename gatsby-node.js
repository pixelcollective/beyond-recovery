const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)
const {get} = require('lodash')

/**
 * Create node hook.
 */
exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions

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

    const parent = getNode(get(node, 'parent'))
    createNodeField({
      node,
      name: 'collection',
      value: get(parent, 'sourceInstanceName'),
    })
  }
}

/**
 * Create pages.
 */
exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const query = type => `
    query {
      allMarkdownRemark(
        filter: {
          fields: {
            collection: {eq: "${type}"}
          }
        },
        sort: {
          fields: [frontmatter___date]
          order: DESC
        }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              description
              date
              image
              actionId
              action
              outlet
              outletUrl
              youtubeId
            }
            fields {
              slug
              collection
            }
          }
        }
      }
    }
  `

  const postsData = await graphql(query('post'))
  const pagesData = await graphql(query('page'))
  const actionsData = await graphql(query('action'))
  const pressData = await graphql(query('press'))
  const toolsData = await graphql(query('tool'))
  const trainingsData = await graphql(query('training'))

  Array(
    {
      type: 'post',
      response: postsData,
    },
    {
      type: 'action',
      response: actionsData,
    },
    {
      type: 'press',
      response: pressData,
    },
    {
      type: 'page',
      response: pagesData,
    },
    {
      type: 'tool',
      response: toolsData,
    },
    {
      type: 'training',
      response: trainingsData,
    },
  ).forEach(collection => {
    console.log(collection)
    collection.response.data.allMarkdownRemark.edges.forEach(({node}) => {
      const slug = `${collection.type}${node.fields.slug}`

      createPage({
        path: slug,
        component: path.resolve(`./src/templates/${collection.type}.js`),
        context: {
          slug,
          data: {
            ...node.frontmatter,
            ...node.fields,
            ...node,
          },
        },
      })
    })
  })
}
