/**
 * Modules
 */
import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {Flex, Box} from 'rebass'

/**
 * Components
 */
import Layout from '../components/layout'

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
const DEFAULT_DESCRIPTION =
  'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Posts Template
 *
 * @prop {string}  title
 * @prop {string}  description
 * @prop {objects} posts
 */
const PostsTemplate = ({title, description, posts}) => (
  <Layout>
    <Helmet>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>{title || DEFAULT_TITLE}</h1>
          </header>

          <Flex flexWrap="wrap" mx={-2}>
            {posts.edges.map(({node: {frontmatter, fields}}, id) => {
              const {title, description, image} = frontmatter
              const slug = `/post/${fields.slug}`

              return [
                <Box key={id} px={2} py={2}>
                  {image && (
                    <Box>
                      <Link to={slug}>
                        <img
                          src={image}
                          style={{
                            minWidth: '100%',
                            maxWidth: '100%',
                          }}
                          round={5}
                        />
                      </Link>
                    </Box>
                  )}

                  <Box px={2} py={2} width={1 / 2}>
                    <Link to={slug}>
                      <Title>{title}</Title>
                    </Link>
                    <Box color={'white'} dangerouslySetInnerHTML={{__html: description}} />
                  </Box>
                </Box>,
              ]
            })}
          </Flex>
        </div>
      </section>
    </div>
  </Layout>
)

export default PostsTemplate
