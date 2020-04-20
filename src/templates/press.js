import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from 'rebass'

import Layout from '../components/layout'

const DEFAULT_TITLE = 'Press'
const DEFAULT_DESCRIPTION = 'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Press Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} content
 */
const PressTemplate = ({ title, description, content }) => (
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
            <h1>{title}</h1>
          </header>
          <Box mb={4} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </section>
    </div>
  </Layout>
)

/**
 * Press Page
 *
 * @param {object} data
 */
const PressPage = ({ pageContext: { data: { frontmatter }}}) => (
  <PressTemplate
    title={frontmatter.title}
    description={frontmatter.description}
    content={frontmatter.content}
  />
)

export { PressTemplate }
export default PressPage