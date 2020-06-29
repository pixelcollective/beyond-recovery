/**
 * Modules
 */
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

/**
 * Templates
 */
import ToolsTemplate from '../templates/tools'

/**
 * Tool Page
 */
const Tool = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {collection: {eq: "tool"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              image
              content
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
    <ToolsTemplate
      title={'Tools'}
      description={
        'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'
      }
      posts={data.allMarkdownRemark}
    />
  )
}

export default Tool
