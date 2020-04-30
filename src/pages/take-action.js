import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import ActionsTemplate from './../templates/actions'

/**
 * Actions Page
 */
const ActionsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {collection: {eq: "action"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              content
              embed
              script
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <ActionsTemplate
      title={'Actions'}
      description={
        'Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s.'
      }
      actions={data.allMarkdownRemark}
    />
  )
}

export default ActionsPage
