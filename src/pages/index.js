import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Image from 'gatsby-image'
import {Helmet} from 'react-helmet'
import {Flex, Box} from 'rebass'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Callout from '../components/Callout'

/**
 * Home Page Component
 */
const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: {eq: "images/background.png"}) {
        childImageSharp {
          fluid(cropFocus: ATTENTION, duotone: {highlight: "#ff7301", shadow: "#8b0000"}) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: {eq: "images/logo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image01: file(relativePath: {eq: "images/30220593851_55f8bc7af5_o.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image05: file(relativePath: {eq: "images/30220593851_55f8bc7af5_o.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image06: file(relativePath: {eq: "images/29676270444_5e09913cd5_o.jpg"}) {
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

      <div id="main" style={{maxWidth: '100vw'}}>
        <section style={{maxWidth: '100vw'}}>
          <Callout logoSrc={data.logo.childImageSharp.fluid} />
        </section>
        <Flex
          backgroundColor={'#0082F2'}
          flexDirection={['column', 'column', 'row']}
          flexWrap={true}>
          <Box>
            <div style={{position: 'relative', marginBottom: '2rem'}}>
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
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))',
                  width: '100vw',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  ['&::hover']: {
                    background: 'rgba(0, 0, 0, 0)',
                  },
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                }}>
                <div className="inner">
                  <header className="major">
                    <h3>Take Action</h3>
                  </header>
                  <p>
                    Join other renters, homeowners, and small business people in calling out our
                    electeds to cancel rent and mortgages and guarantee homes for all!
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/take-action" className="button">
                        Take action
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Box>
          <Box>
            <div
              style={{
                position: 'relative',
                marginBottom: '2rem',
              }}>
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
                  backgroundImage:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))',
                  width: '100vw',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  ['&::hover']: {
                    background: 'rgba(0, 0, 0, 0)',
                  },
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  padding: '2rem',
                }}>
                <div className="inner">
                  <header className="major">
                    <h3>Press</h3>
                  </header>
                  <p>
                    Beyond Recovery is making news across the country. Check out just a few of the
                    articles highlighting the stories of people organizing for homes for all.
                  </p>
                  <ul className="actions">
                    <li>
                      <Link to="/press" className="button">
                        Read more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Box>
        </Flex>
      </div>

      <section>
        <div className="inner">
          <header className="major">
            <h2>Help fund our campaign</h2>
          </header>
          <div>
            <p>
              <strong>
                No one should go into debt because they are out of work due to a public health
                crisis.
              </strong>
            </p>
            <p>
              Join us in fighting for a #DebtFreeFuture. It&apos;s time to #CancelRent,
              #CancelMortgages, and win #HomesForAll during the pandemic and beyond recovery.
            </p>

            <ul className="actions">
              <li>
                <Link to="/donate" className="button">
                  Donate
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Index
