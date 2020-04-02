import React from 'react'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import { Heading, Text, Flex, Box } from 'rebass'

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.round || 0}px;
`

const space = 1.5
const smallScreen = `980px`

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
  }
`

const Col = styled.div`
  width: ${(props) => (props.size / 12) * 100 - 2}%;
  display: flex;
  flex-direction: column;
  margin: ${space / 2}rem auto ${space / 2}rem auto;

  &::first-of-type,
  &::last-of-type {
    width: ${(props) => (props.size / 12) * 100}%;
  }

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
    width: 100%;
  }
`

export default props => (
  <Layout>
    <Helmet>
      <title>Holler at your Representative: Support Our #DebtFreeFuture</title>
      <meta
        name="description"
        content="We need #HomesForAll to #FlattenTheCurve. That's why we're putting pressure on our decision-makers at every level to enact our people’s plan to ensure a healthy, stable, thriving future for us all."
      />
      <html lang="en" />
    </Helmet>

    {(() => {
      if (typeof document !== 'undefined') {
          ((n,e,w,m,o,d) => {
          m = n.createElement(e)
          m.async = 1
          m.src = w;
          o = n.getElementsByTagName(e)[0]
          o.parentNode.insertBefore(m,o)
        })(
          document,
          'script',
          '//engage.newmode.net/embed/18244/18289.js'
        )
      }
    })()}

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header>
            <Heading fontSize={6} style={{marginBottom: 0, fontFamily: 'Kalam'}}>Holler at your Representative
            </Heading>
            <h2 style={{lineBreak: 'word'}}>Support Our #DebtFreeFuture #BeyondRecovery</h2>
          </header>

          <Flex flexDirection={['column-reverse', 'row']}>
            <Box mr={[0, 4]} width={[1, 1/2]}>
              <p>We need #HomesForAll to #FlattenTheCurve. That's why we're putting pressure on our decision-makers at every level to enact our people’s plan to ensure a healthy, stable, thriving future for us all.</p>
              <p>Use this tool to send a message directly to your representatives, urging them to commit to the following campaign demands &mdash;</p>

              <h2>We want a future free from debt.</h2>

              <p>Cancel all rent, mortgage and utility payments and ensure no person or small business takes on new debt during this crisis.</p>

              <h2>We want a future with safe, dignified and cage-free shelter and sanctuary and homes for all.</h2>
              <ul>
                <li>Halt evictions, foreclosures, raids and sweets and to turn vacant units into safe homes & refuge for people experiencing homelessness</li>
                <li>Ensure the well-being of those incarcerated or detained and the general public by releasing our people from cages.</li>
              </ul>

              <h2>We want a future where utilities vital to our personal and collective health are guaranteed.</h2>
              <p>Prohibit all utilities shut offs, rate increases and restore essential services to all households. We must guarantee water, electricity, gas, phone and internet essential to our health and well-being.</p>

              <h2>We want a future where our work is valued and protected.</h2>
              <p>The COVID-19 crisis is showing clearly who the most essential workers are in our world - and it’s not the CEOs and the 1%. It’s the teachers, the warehouse workers, the nurses, the domestic workers, the home health aides and service workers.</p>
              <p>We must guarantee unemployment, sick-time and paid leave, health care, worker protections and a living-wage for all.</p>

              <p>If you have time, share your own story about how this is affecting your life [in the first paragraph]. Together we can flood the inboxes of our representatives with powerful testimonies that demonstrate why we need to go #BeyondRecovery and guarantee #HomesForAll!</p>
            </Box>

            <Box width={[1, 1/2]} mb={4}>
              <Box fontFamily={'system-ui'} id="newmode-embed-18244-18289" css={css`
                *,
                &:*,
                & {
                  body, p, li, em, i, h1, b, h2, h3, h4, h5, h6, strong, body.page-nm-letter, div.l-main, div.node--letter--embed, .form-item .item-label label, .form-item-submitted-newspapers-checkboxes, a.nm-branding-link, .webform-component-addressfield .form-item[class*="autocompletion-block"] + div[class*="toogle"] a, .webform-component a
                }
              `} />
            </Box>
          </Flex>
        </div>
      </section>
    </div>
  </Layout>
)