import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Callout from '../components/Callout'

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
      background: file(relativePath: {
        eq: "images/background.png",
      }) {
        childImageSharp {
          fluid(
            cropFocus: ATTENTION,
            duotone: {
              highlight: "#ff7301",
              shadow: "#8b0000",
            },
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: {
        eq: "images/logo.png",
      }) {
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
            content: 'beyond recovery, rent strike'
          },
        ]}>
        <html lang="en" />
      </Helmet>

      <Banner
        bgSrc={data.background.childImageSharp.fluid} />

      <div id="main" style={{ maxWidth: '100vw' }}>
        <section style={{ maxWidth: '100vw' }}>
          <Callout logoSrc={data.logo.childImageSharp.fluid } />
        </section>
      </div>
    </Layout>
  )
}

/**
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
