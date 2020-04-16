import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Flex, Box } from 'rebass'

const Action = ({ id }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      ;((n, e, w, m, o, d) => {
        m = n.createElement(e)
        m.async = 1
        m.src = w
        o = n.getElementsByTagName(e)[0]
        o.parentNode.insertBefore(m, o)
      })(document, 'script', `//engage.newmode.net/embed/${id[0]}/${id[1]}.js`)
    }
  }, [])

  return (
    <Box
      fontFamily={'system-ui'}
      id={`newmode-embed-${id[0]}-${id[1]}`}
    />
  )
}

export default (props) => {
  return (
    <Layout>
      <Helmet>
        <title>Holler at your Representative: Support Our #DebtFreeFuture</title>
        <meta
          name="description"
          content="We need #HomesForAll to #FlattenTheCurve. That's why we're putting pressure on our decision-makers at every level to enact our people’s plan to ensure a healthy, stable, thriving future for us all."
        />
        <html lang="en" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <Flex flexDirection={['column-reverse', 'row']}>
              <Box width={[1]} mb={4}>
                <Action id={['18244', '18286']} />
              </Box>
            </Flex>
          </div>
        </section>
      </div>
    </Layout>
  )
}
