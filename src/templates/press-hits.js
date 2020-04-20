import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'
import { Flex, Box } from 'rebass'

import Layout from '../components/layout'
import { Img } from '../components/parts/demands'

const Title = styled.h1`
  font-family: 'Kalam Bold', 'Kalam';
  font-size: 4rem;
  letter-spacing: 0.1ch;
  margin-bottom: 0;
  padding-bottom: 0;
`

const DEFAULT_TITLE = 'Press'
const DEFAULT_DESCRIPTION = 'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Press Template
 */
const PressHitsTemplate = ({ title, description, posts }) => (
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
            <h1>{title || 'Press'}</h1>
          </header>

          {posts.edges.map(({ node: { frontmatter, fields }}, id) => {
            const { title, description, image } = frontmatter
            const { slug } = fields

            return (
              <Flex flexWrap='wrap' mx={-2}>
                {image && image.childImageSharp.fluid && (
                  <Box px={2} py={2} width={1/2}>
                    <Link to={`press/${slug}`}><Img fluid={image.childImageSharp.fluid} round={5} /></Link>
                  </Box>
                )}

                <Box px={2} py={2} width={1/2}>
                  <Link to={`press/${slug}`}>
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

export default PressHitsTemplate