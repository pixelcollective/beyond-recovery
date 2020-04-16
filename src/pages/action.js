import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import { Heading, Flex, Box, Button } from 'rebass'

/**
 * Action
 */
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
        <title>{heading}</title>
        <meta
          name="description"
          content={subheading}
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
                    <Box dangerouslySetInnerHTML={{__html: before }} />
                    <Button fontSize={1} onClick={() => setReadToggle(true)}>
                      Read more
                    </Button>
                  </Box>
                )}

                {body && (
                  <Box
                    dangerouslySetInnerHTML={{__html: body }}
                    style={{
                      opacity: readToggle ? 1 : 0,
                      transition: 'opacity 0.3s ease-in-out',
                    }} />
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
