/**
 * Modules
 */
import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { Flex, Box } from 'rebass'

/**
 * Components
 */
import Layout from '../components/layout'
import { Img } from '../components/parts/demands'

/**
 * Styled components
 */
const Title = styled.h1`
  font-family: 'Kalam Bold', 'Kalam';
  font-size: 4rem;
  letter-spacing: 0.1ch;
  margin-bottom: 0;
  padding-bottom: 0;
`

/**
 * Constants
 */
const DEFAULT_TITLE = 'Blog'
const DEFAULT_DESCRIPTION = 'Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s.'

/**
 * Posts Template
 *
 * @prop {string}  title
 * @prop {string}  description
 * @prop {objects} posts
 */
const PostsTemplate = ({ title, description, posts }) => (
  <Layout>
    <Helmet>
      <title>{title || DEFAULT_TITLE}</title>
      <meta
        name="description"
        content={description || DEFAULT_DESCRIPTION}
      />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>{ title || DEFAULT_TITLE }</h1>
          </header>

          {posts.edges.map(({ node: { frontmatter, fields }}, id) => {
            const { title, description, image } = frontmatter
            const slug = `/post/${fields.slug}`

            return (
              <Flex key={id} flexWrap='wrap' mx={-2}>
                {image && (
                  <Box px={2} py={2} width={1/2}>
                    <Link to={slug}>
                      <Img src={image} round={5} />
                    </Link>
                  </Box>
                )}

                <Box px={2} py={2} width={1/2}>
                  <Link to={slug}>
                    <Title>{title}</Title>
                  </Link>
                  <Box color={'white'} dangerouslySetInnerHTML={{ __html: description }} />
                </Box>
              </Flex>
            )
          })}
        </div>
      </section>
    </div>
  </Layout>
)

export default PostsTemplate
