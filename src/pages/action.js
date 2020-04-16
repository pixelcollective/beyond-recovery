import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import { Heading, Text, Flex, Box, Button } from 'rebass'

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

const Action = ({ scripts, embed }) => {
  {scripts && (
    <Helmet>
      {scripts}
    </Helmet>
  )}

  if (typeof document !== 'undefined') {
    return embed
  }

  return null
}

export default ({ name, heading, subheading, before, body, embed, scripts, ...props }) => {
  const [readToggle, setReadToggle] = useState(false)

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
            <header>
              {heading && (
                <Heading fontSize={6} style={{ marginBottom: 0, fontFamily: 'Kalam' }}>
                  { heading }
                </Heading>
              )}

              {subheading && (
                <h2 style={{ lineBreak: 'word' }}>{ subheading }</h2>
              )}
            </header>

            <Flex flexDirection={['column-reverse', 'row']}>
              <Box mr={[0, 4]} width={[1, 1 / 2]}>
                {! readToggle && before && (
                  <Box>
                    { before }

                    <Button fontSize={1} onClick={() => setReadToggle(true)}>
                      Read more
                    </Button>
                  </Box>
                )}

                {body && (
                  <Box style={{ opacity: readToggle ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }}>
                    { body }
                  </Box>
                )}
              </Box>

              {embed && (
                <Box width={[1, 1 / 2]} mb={4}>
                  <Action embed={embed} scripts={scripts || null} />
                </Box>
              )}
            </Flex>
          </div>
        </section>
      </div>
    </Layout>
  )
}
