import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Box } from 'rebass'

const ActionComponent = ({ script, embed }) => {
  script && <Helmet>{script}</Helmet>
  return typeof document !== 'undefined' ? embed : null
}

/**
 * Action Page Template
 *
 * @param {string} title
 * @param {string} secondaryTitle
 * @param {string} script
 * @param {string} embed
 */
const ActionPageTemplate = ({
  title,
  secondaryTitle,
  script,
  embed,
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={secondaryTitle} />
        <html lang="en" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            {embed && (
              <Box width={[1]}>
                <ActionComponent
                  embed={embed || null}
                  script={script || null}
                />
              </Box>
            )}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        secondaryTitle
        script
        embed
      }
    }
  }
`

export default ActionPageTemplate
