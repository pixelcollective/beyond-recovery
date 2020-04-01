import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import { Flex, Text, Heading, Box, sx } from 'rebass'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Callout from '../components/Callout'
import Festival from './festival'

const Article = styled.article`
  position: relative;
  overflow: hidden;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    z-index: 0;
  }
`

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
      </div>

      <div id="main" className="alt">
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
        <Callout />
      </div>
    </Layout>
  )
}

/**
 * <Box
        sx={{
          mx: 'auto',
          px: 3,
          mt: 4,
        }}>
        <Box
          sx={{
            color: 'white',
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
          }}>
          <Box p={3} color="background" bg="primary" justifyContent="center" display="flex" flexDirection="column">
            <Heading fontSize={6} mb={4} bg="muted" fontFamily="Kalam">
              #CancelRent Festival
            </Heading>
          <Text color="white" mb={4}>
            The coronavirus crisis has made many of us stuck between staying healthy or staying housed. With the loss of
            our incomes, we may not be able to make rent on April 1st or May 1st. We’re envisioning a future beyond
            recovery and calling out to our electeds to cancel rent and mortgages and guarantee homes for all!
          </Text>
          <Text color="white">
            Rent Parties have deep roots in the Black struggle for freedom, self-determination and mutual aid. We're
            bringing back this hundred year old tradition to demand a just response to coronavirus.
          </Text>
          </Box>

          <Box p={3}>
            <Image fluid={data.image05.childImageSharp.fluid} style={{borderRadius: '5px'}} />
          </Box>
        </Box>
      </Box>
<section id="one" className="tiles">
          <Article>
            <Image fluid={data.image05.childImageSharp.fluid} />
            <header className="major">
              <h3>Aliquam</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link to={'/Landing'} className="link primary"></Link>
          </Article>

          <Article>
            <Image fluid={data.image06.childImageSharp.fluid} />
            <header className="major">
              <h3>Tempus</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link to={'/Landing'} className="link primary"></Link>
          </Article>

          <Article>
            <Image fluid={data.image01.childImageSharp.fluid} />

            <header className="major">
              <h3>Magna</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link to={'/Landing'} className="link primary"></Link>
          </Article>

          <Article>
            <Image fluid={data.image02.childImageSharp.fluid} />

            <header className="major">
              <h3>Ipsum</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link to={'/Landing'} className="link primary"></Link>
          </Article>

          <Article>
            <Image fluid={data.image03.childImageSharp.fluid} />

            <header className="major">
              <h3>Consequat</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link to={'/Landing'} className="link primary"></Link>
          </Article>

          <Article>
          <Image fluid={data.image04.childImageSharp.fluid} />

            <header className="major">
              <h3>Etiam</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link to={'/Landing'} className="link primary"></Link>
          </Article>
        </section>
*/
