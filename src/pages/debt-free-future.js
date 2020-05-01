import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import {Heading, Flex, Box, Button} from 'rebass'

const Action = ({id}) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      ;((n, e, w, m, o) => {
        m = n.createElement(e)
        m.async = 1
        m.src = w
        o = n.getElementsByTagName(e)[0]
        o.parentNode.insertBefore(m, o)
      })(document, 'script', `//engage.newmode.net/embed/${id[0]}/${id[1]}.js`)
    }
  }, [])

  return <Box fontFamily={'system-ui'} id={`newmode-embed-${id[0]}-${id[1]}`} />
}

const DebtFreeFuture = () => {
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
              <Heading fontSize={6} style={{marginBottom: 0, fontFamily: 'Kalam'}}>
                Holler at your Representative
              </Heading>
              <h2 style={{lineBreak: 'word'}}>Support Our #DebtFreeFuture #BeyondRecovery</h2>
            </header>

            <Flex flexDirection={['column-reverse', 'row']}>
              <Box mr={[0, 4]} width={[1, 1 / 2]}>
                {!readToggle && (
                  <Box>
                    <p>
                      We need #HomesForAll to #FlattenTheCurve. That&apos;s why we&apos;re putting
                      pressure on our decision-makers at every level to enact our people&apos;s plan
                      to ensure a healthy, stable, thriving future for us all.
                    </p>
                    <p>
                      Use this tool to send a message directly to your representatives, urging them
                      to commit to the following campaign demands &mdash;
                    </p>

                    <Button fontSize={1} onClick={() => setReadToggle(true)}>
                      Read more
                    </Button>
                  </Box>
                )}

                <Box style={{opacity: readToggle ? 1 : 0, transition: 'opacity 0.3s ease-in-out'}}>
                  <h2>We want a future free from debt.</h2>

                  <p>
                    Cancel all rent, mortgage and utility payments and ensure no person or small
                    business takes on new debt during this crisis.
                  </p>

                  <h2>
                    We want a future with safe, dignified and cage-free shelter and sanctuary and
                    homes for all.
                  </h2>
                  <ul>
                    <li>
                      Halt evictions, foreclosures, raids and sweets and to turn vacant units into
                      safe homes & refuge for people experiencing homelessness
                    </li>
                    <li>
                      Ensure the well-being of those incarcerated or detained and the general public
                      by releasing our people from cages.
                    </li>
                  </ul>

                  <h2>
                    We want a future where utilities vital to our personal and collective health are
                    guaranteed.
                  </h2>
                  <p>
                    Prohibit all utilities shut offs, rate increases and restore essential services
                    to all households. We must guarantee water, electricity, gas, phone and internet
                    essential to our health and well-being.
                  </p>

                  <h2>We want a future where our work is valued and protected.</h2>
                  <p>
                    The COVID-19 crisis is showing clearly who the most essential workers are in our
                    world - and it’s not the CEOs and the 1%. It’s the teachers, the warehouse
                    workers, the nurses, the domestic workers, the home health aides and service
                    workers.
                  </p>
                  <p>
                    We must guarantee unemployment, sick-time and paid leave, health care, worker
                    protections and a living-wage for all.
                  </p>

                  <p>
                    If you have time, share your own story about how this is affecting your life [in
                    the first paragraph]. Together we can flood the inboxes of our representatives
                    with powerful testimonies that demonstrate why we need to go #BeyondRecovery and
                    guarantee #HomesForAll!
                  </p>
                </Box>
              </Box>

              <Box width={[1, 1 / 2]} mb={4}>
                <Action id={['18244', '18289']} />
              </Box>
            </Flex>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default DebtFreeFuture
