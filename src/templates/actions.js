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
  'Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s.'

/**
 * Single Action
 *
 * @param {string} image
 * @param {string} title
 * @param {string} slug
 * @param {string} description
 */
const Action = ({title, slug, description}) => (
  <Flex flexWrap="wrap" mx={-2}>
    <Box px={2} py={2} width={1}>
      <Link to={`/action/${slug}`}>
        <Title>{title}</Title>
      </Link>
      <Box color={'white'} dangerouslySetInnerHTML={{__html: description}} />
    </Box>
  </Flex>
)

/**
 * Actions Template
 *
 * @param {string} title
 * @param {string} description
 * @param {object} actions
 */
const ActionsTemplate = ({title, description, actions}) => (
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

          {actions.edges.map(
            (
              {
                node: {
                  frontmatter: {title, description, image},
                  fields: {slug},
                },
              },
              id,
            ) => (
              <Action key={id} title={title} description={description} image={image} slug={slug} />
            ),
          )}
        </div>
      </section>
    </div>
  </Layout>
)

export default ActionsTemplate
