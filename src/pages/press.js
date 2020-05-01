/**
 * Modules
 */
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

/**
 * Templates
 */
import PressTemplate from './../templates/press-hits'

/**
 * Press Page
 */
const Press = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {collection: {eq: "press"}}}) {
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
    <PressTemplate
      title={'Press'}
      description={
        'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'
      }
      posts={data.allMarkdownRemark}
    />
  )
}

export default Press
