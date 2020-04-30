import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import {Box} from 'rebass'

const Action = () => {
  if (typeof document !== 'undefined') {
    const query = new URLSearchParams(window.location.search)

    return (() => {
      useEffect(() => {
        ;((n, e, w, m, o, d) => {
          m = n.createElement(e)
          m.async = 1
          m.src = w
          o = n.getElementsByTagName(e)[0]
          o.parentNode.insertBefore(m, o)
        })(
          document,
          'script',
          `//engage.newmode.net/embed/${query.get('action')}/${query.get('id')}.js`,
        )
      }, [])

      return (
        <>
          <Helmet>
            <title>{query.get('title') || 'Take Action with Cancel Rent'}</title>
            <meta
              name="description"
              content={
                query.get('description') ||
                'Together, we are building a powerful movement of renters, homeowners and community members across the country to win homes for all.'
              }
            />
            <html lang="en" />
          </Helmet>
          <Box
            fontFamily={'system-ui'}
            id={`newmode-embed-${query.get('action')}-${query.get('id')}`}
          />
        </>
      )
    })()
  }

  return null
}

const ActionPage = () => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <Box width={[1, 4 / 5]} mx={'auto'} mb={4}>
            <Action />
          </Box>
        </div>
      </section>
    </div>
  </Layout>
)

export default ActionPage
