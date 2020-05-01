import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import {css} from '@emotion/core'
import {injectGlobal} from 'emotion'
import {Box} from 'rebass'

/**
 * Donation iframe
 */
const Donate = () => {
  injectGlobal`
    footer {
      display: none!important;
    }
  `

  return (
    <Layout>
      <Helmet
        lang={'en'}
        title={'Donate'}
        meta={[
          {
            property: 'description',
            content:
              "We need #HomesForAll to #FlattenTheCurve. That's why we're putting pressure on our decision-makers at every level to enact our people’s plan to ensure a healthy, stable, thriving future for us all.",
          },
        ]}
      />

      <Box maxHeight={'100vh'}>
        <iframe
          css={css`
            width: 100%;
            height: 100vh;
            padding: 4rem 2rem 2rem 2rem;
          `}
          src="https://righttothecityalliance.salsalabs.org/BeyondRecovery0/index.html"
        />
      </Box>
    </Layout>
  )
}

export default Donate
