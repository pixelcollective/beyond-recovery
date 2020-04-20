import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Box } from 'rebass'

/**
 * Action Component
 * @param {string} actionId
 * @param {string} action
 */
const ActionComponent = ({ actionId, action }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      ;((n, e, w, m, o, d) => {
        m = n.createElement(e)
        m.async = 1
        m.src = w
        o = n.getElementsByTagName(e)[0]
        o.parentNode.insertBefore(m, o)
      })(document, 'script', `//engage.newmode.net/embed/${action}/${actionId}.js`)
    }
  }, [])

  return (
    <Box
      fontFamily={'system-ui'}
      id={`newmode-embed-${action}-${actionId}`}
    />
  )
}

/**
 * Action Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} actionId
 * @param {string} action
 */
const ActionTemplate = ({ title, description, actionId, action }) => (
  <Layout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || null} />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <Box width={[1]}>
            <ActionComponent
              actionId={actionId || null}
              action={action || null}
            />
          </Box>
        </div>
      </section>
    </div>
  </Layout>
)

/**
 * Action Page
 *
 * @param {string} title
 * @param {string} secondaryTitle
 * @param {string} script
 * @param {string} embed
 */
const ActionPage = ({
  pageContext: {
    data: {
      title,
      description,
      actionId,
      action,
    },
  },
}) => (
  <ActionTemplate
    title={title}
    description={description}
    actionId={actionId}
    action={action}
  />
)

export { ActionTemplate }
export default ActionPage
