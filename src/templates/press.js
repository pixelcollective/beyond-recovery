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
const PressTemplate = ({ pageContext: { data: { frontmatter }}}) => (
  <Layout>
    <Helmet>
      <title>{frontmatter.title || DEFAULT_TITLE}</title>
      <meta
        name="description"
        content={frontmatter.description || DEFAULT_DESCRIPTION}
      />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>{frontmatter.title}</h1>
          </header>
          <Box mb={4} dangerouslySetInnerHTML={{ __html: frontmatter.content }} />
        </div>
      </section>
    </div>
  </Layout>
)

export default PressTemplate