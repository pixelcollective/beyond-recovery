/**
 * Modules
 */
import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import {Text, Image} from 'rebass'

/**
 * Constants
 */
const DEFAULT_TITLE = 'Cancel Rent'
const DEFAULT_DESCRIPTION =
  'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Page Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} content
 */
const PageTemplate = ({title, description, content, image}) => (
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
            <h1>{title}</h1>
          </header>
          {image && <Image maxWidth="100%" src={image} />}
          <Text mb={4} dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </section>
    </div>
  </Layout>
)

/**
 * Page Template
 */
const Page = ({
  pageContext: {
    data: {title, description, html, image},
  },
}) => <PageTemplate title={title} description={description} content={html} image={image} />

export {PageTemplate}
export default Page
