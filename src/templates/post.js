import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Box } from 'rebass'

const DEFAULT_TITLE = 'Cancel Rent'
const DEFAULT_DESCRIPTION = 'Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s.'

/**
 * Post Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} content
 */
const PostTemplate = ({ title, description, content }) => (
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
 * Post Template
 */
const PostPage = ({
  pageContext: {
    data: {
      title,
      description,
      content,
    },
  },
}) => (
  <PostTemplate
    title={title}
    description={description}
    content={content}
  />
)

export { PostTemplate }
export default PostPage
