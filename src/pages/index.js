import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Flex, Text, Heading, Box, sx } from 'rebass'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Callout from '../components/Callout'

/**
 * Home Page Component
 */
export default () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/background.png" }) {
        childImageSharp {
          fluid(cropFocus: ATTENTION, duotone: { highlight: "#ff7301", shadow: "#8b0000" }) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image01: file(relativePath: { eq: "images/30220593851_55f8bc7af5_o.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image05: file(relativePath: { eq: "images/30220593851_55f8bc7af5_o.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image06: file(relativePath: { eq: "images/29676270444_5e09913cd5_o.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title="Beyond Recovery"
        meta={[
          {
            name: 'description',
            content: 'A people’s plan to ensure a healthy, stable, thriving future for us all.',
          },
          {
            name: 'keywords',
            content: 'beyond recovery, rent strike',
          },
        ]}>
        <html lang="en" />
      </Helmet>

      <Banner bgSrc={data.background.childImageSharp.fluid} />

      <div id="main" style={{ maxWidth: '100vw' }}>
        <section style={{ maxWidth: '100vw' }}>
          <Callout logoSrc={data.logo.childImageSharp.fluid} />
        </section>
        <Flex backgroundColor={'#0082F2'} flexDirection={['column', 'column', 'row']} flexWrap={true}>
          <Box>
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <Image
                fluid={data.image01.childImageSharp.fluid}
                style={{
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  minWidth: '100%',
                  width: '64rem',
                  height: '32rem',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))',
                  width: '100vw',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  ['&::hover']: { background: 'rgba(0, 0, 0, 0)' },
                }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '2rem' }}>
                <div className="inner">
                  <header className="major">
                    <h3>#CancelRent Festival</h3>
                  </header>
                  <p>
                    The coronavirus crisis has made many of us stuck between staying healthy or staying housed. With the
                    loss of our incomes, we may not be able to make rent on April 1st or May 1st. We’re envisioning a
                    future beyond recovery and calling out to our electeds to cancel rent and mortgages and guarantee
                    homes for all!
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/festival" className="button">
                        Check it out
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Box>
          <Box>
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <Image
                fluid={data.image06.childImageSharp.fluid}
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  minWidth: '100%',
                  width: '64rem',
                  height: '32rem',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))',
                  color: 'rgba(0, 130, 242, 0.4)',
                  width: '100vw',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  '&:hover': { background: 'rgba(0, 0, 0, 0)' },
                }}></div>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '2rem' }}>
                <div className="inner">
                  <header className="major">
                    <h3>Demands</h3>
                  </header>
                  <p>A people’s plan to ensure a healthy, stable, thriving future for us all.</p>
                  <ul className="actions">
                    <li>
                      <Link to="/demands" className="button">
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Box>
        </Flex>
      </div>

      <div className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>About</h1>
            </header>
            <p>
              The Beyond Recovery campaign is initiated by the Homes For All campaign and the Right To The City
              Alliance. Homes For All is a grassroots people’s movement fighting to win permanent, dignified and
              affordable homes for all people.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  )
}
