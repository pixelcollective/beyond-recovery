/**
 * Modules
 */
import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from 'rebass'

/**
 * Application components
 */
import Layout from '../components/layout'

/**
 * Constants
 */
const DEFAULT_TITLE = 'Press'
const DEFAULT_DESCRIPTION = 'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Press Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} content
 */
const PressTemplate = ({
  title,
  description,
  posts,
}) => (
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

          {posts.edges.map(({ node: {frontmatter, fields}}, id) => {
            const {title, description, image} = frontmatter
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

/**
 * Press Page
 *
 * @param {object} data
 */
const PressPage = ({
  pageContext: {
    data: {
      frontmatter: {
        title,
        description,
        content,
      },
    },
  },
}) => (
  <PressTemplate
    title={title}
    description={description}
    content={content}
  />
)

export { PressTemplate }
export default PressPage