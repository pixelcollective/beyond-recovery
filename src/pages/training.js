/**
 * Modules
 */
import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

/**
 * Templates
 */
import TrainingsTemplate from '../templates/trainings'

/**
 * Trainings Page
 */
const Trainings = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fields: {collection: {eq: "training"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              image
              content
              youtubeId
              episode
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
    <TrainingsTemplate
      title={'Renter Nation Training Series'}
      description={
        'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'
      }
      trainings={data.allMarkdownRemark}
    />
  )
}

export default Trainings
