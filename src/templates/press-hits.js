/**
 * Modules.
 */
import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { Flex, Box } from 'rebass'

/**
 * Components.
 */
import Layout from '../components/layout'
import { Img } from '../components/parts/demands'

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
const DEFAULT_TITLE = 'Press'
const DEFAULT_DESCRIPTION = 'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Press Hit
 *
 * @prop {number} id
 * @prop {object} image
 * @prop {string} title
 * @prop {string} slug
 * @prop {string} description
 */
const PressHit = ({image, title, slug, description }) => (
  <Flex flexWrap='wrap' mx={-2} mb={5}>
      <Box px={2} py={2} width={1/2}>
        <Link to={`press/${slug}`}>
          <img src={image} style={{maxWidth: '100%'}} round={5} />
        </Link>
      </Box>

    <Box px={2} py={2} width={1/2}>
      <Link to={`press/${slug}`}>
        <Title>{title}</Title>
      </Link>
      <Box color={'white'} dangerouslySetInnerHTML={{ __html: description }} />
    </Box>
  </Flex>
)

/**
 * Press Template
 *
 * @prop {string} title
 * @prop {string} description
 * @prop {object} posts
 */
const PressHitsTemplate = ({title, description, posts}) => (
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
            <h1>{title || DEFAULT_TITLE}</h1>
          </header>

          {posts.edges.map(({node: { frontmatter: {title, description, image}, fields: {slug}}}, id) =>
            <PressHit
              title={title}
              description={description}
              image={image}
              slug={slug}
            />
          )}
        </div>
      </section>
    </div>
  </Layout>
)

export default PressHitsTemplate