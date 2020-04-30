import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import Callout from '../components/Callout'

/**
 * About Page Component
 */
const About = () => {
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
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed."
        />
        <html lang="en" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>About</h1>
            </header>
            <Callout logoSrc={data.logo.childImageSharp.fluid} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About
