/**
 * Modules.
 */
import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {Box} from 'rebass'

/**
 * Components.
 */
import Layout from '../components/layout'

/**
 * Styled components.
 */
const Title = styled.h1`
  font-family: 'Kalam Bold', 'Kalam';
  font-size: 2rem;
  letter-spacing: 0.1ch;
  margin-bottom: 0;
  padding-bottom: 0;
  line-height: 3rem;
`

/**
 * Constants
 */
const DEFAULT_TITLE = 'Tools'
const DEFAULT_DESCRIPTION =
  'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Tools Template
 *
 * @prop {string} title
 * @prop {string} description
 * @prop {object} posts
 */
const ToolsTemplate = ({title, description, posts}) => (
  <Layout>
    <Helmet>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major" style={{paddingBottom: '2rem'}}>
            <h1>{title || DEFAULT_TITLE}</h1>
          </header>

          {posts.edges.map(({node: {frontmatter, fields}}, id) => {
            const {title, description, image} = frontmatter
            const slug = `/tool/${fields.slug}`

            return [
              <Box key={id} px={2} pb={4}>
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

                <Box px={2} py={2}>
                  <Link to={slug}>
                    <Title>{title}</Title>
                  </Link>
                  <Box color={'white'} dangerouslySetInnerHTML={{__html: description}} />
                </Box>
              </Box>,
            ]
          })}
        </div>
      </section>
    </div>
  </Layout>
)

export default ToolsTemplate
