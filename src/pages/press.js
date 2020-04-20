import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import PressTemplate from './../templates/press'

/**
 * Press Page
 */
export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {
        fields: { collection: { eq: "press" } }
      }) {
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
    <PressHitsTemplate
      title={'Press'}
      description={'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'}
      posts={data.allMarkdownRemark} />
  )
}
