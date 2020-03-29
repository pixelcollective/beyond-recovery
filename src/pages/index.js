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
      </div>
    </Layout>
  )
}
