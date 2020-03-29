import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Callout from '../components/Callout'
import { useStaticQuery, graphql } from 'gatsby'

/**
 * Home Page Component
 */
export default () => (
  <Layout>
    <Helmet
      title="BEYOND RECOVERY"
      meta={[
        {
          name: 'description',
          content: 'A people’s plan to ensure a healthy, stable, thriving future for us all.',
        },
        { name: 'keywords', content: 'beyond recovery, rent strike' },
      ]}>
      <html lang="en" />
    </Helmet>

    <Banner bgFluidSrc={data.background.childImageSharp.fluid} />

    <div id="main" style={{ maxWidth: '100vw' }}>
      <section style={{ maxWidth: '100vw' }}>
        <Callout />
      </section>

      <section id="one" className="tiles">
        <article style={{ backgroundImage: `url(${data.pic01.childImageSharp.fluid})` }}>
          <header className="major">
            <h3>Aliquam</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/landing" className="link primary"></Link>
        </article>

        <article style={{ backgroundImage: `url(${data.pic02.childImageSharp.fluid})` }}>
          <header className="major">
            <h3>Tempus</h3>
            <p>feugiat amet tempus</p>
          </header>
          <Link to="/landing" className="link primary"></Link>
        </article>

        <article style={{ backgroundImage: `url(${data.pic03.childImageSharp.fluid})` }}>
          <header className="major">
            <h3>Magna</h3>
            <p>Lorem etiam nullam</p>
          </header>
          <Link to="/landing" className="link primary"></Link>
        </article>

        <article style={{ backgroundImage: `url(${data.pic04.childImageSharp.fluid})` }}>
          <header className="major">
            <h3>Ipsum</h3>
            <p>Nisl sed aliquam</p>
          </header>
          <Link to="/landing" className="link primary"></Link>
        </article>

        <article style={{ backgroundImage: `url(${data.pic05.childImageSharp.fluid})` }}>
          <header className="major">
            <h3>Consequat</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
          <Link to="/landing" className="link primary"></Link>
        </article>
        <article style={{ backgroundImage: `url(${data.pic06.childImageSharp.fluid})` }}>
          <header className="major">
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
          </header>
          <Link to="/landing" className="link primary"></Link>
        </article>
      </section>
    </div>
  </Layout>
)

const data = useStaticQuery(graphql`
  query {
    background: file(relativePath: { eq: "images/background.png" }) {
      childImageSharp {
        fluid {
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

    pic01: file(relativePath: { eq: "images/29676243823_a82bc1678f_o.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pic02: file(relativePath: { eq: "images/30220593851_55f8bc7af5_o.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pic03: file(relativePath: { eq: "images/30221095941_ecee6778e8_o.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pic04: file(relativePath: { eq: "images/30191159352_1f5bf7cb6d_o.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pic05: file(relativePath: { eq: "images/30271820676_e46b9f31e4_o.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pic06: file(relativePath: { eq: "images/30306790745_3ceb0fee8b_o.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)
