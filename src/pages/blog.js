import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import PostsTemplate from './../templates/posts'

/**
 * Posts Page
 */
const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "images/logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark(filter: {fields: {collection: {eq: "post"}}}) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              image
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
    <PostsTemplate
      title={'Blog'}
      description={
        'Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s.'
      }
      logo={data.logo}
      posts={data.allMarkdownRemark}
    />
  )
}

export default PostsPage
