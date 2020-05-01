import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import {
  Demand,
  SubDemand,
  Grid,
  Col,
  Container,
  Header,
  PageTitle,
  Img,
  PageSubTitle,
} from '../components/parts/demands'

/**
 * Page: Demands
 */
const Demands = () => {
  const data = useStaticQuery(graphql`
    query {
      image01: file(relativePath: {eq: "images/30221094971_5494396af1_o.jpg"}) {
        childImageSharp {
          fluid(cropFocus: ATTENTION, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image02: file(relativePath: {eq: "images/29676278054_4b8b6994ab_o.jpg"}) {
        childImageSharp {
          fluid(cropFocus: ATTENTION, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet
        title={'Demands'}
        meta={[
          {
            name: 'description',
            content:
              'We demand a coronavirus recovery that leaves us safely housed and free of debt.',
          },
          {
            name: 'keywords',
            content: 'beyond recovery, rent strike',
          },
        ]}>
        <html lang={'en'} />
      </Helmet>

      <section id="banner" className="style2">
        <div className="inner">
          <Header>
            <Grid>
              <Col size="12">
                <PageTitle>Demands</PageTitle>
                <PageSubTitle>
                  A people’s plan to ensure a healthy, stable, thriving future for us all.
                </PageSubTitle>
              </Col>
            </Grid>
            <Grid>
              <Col size={6}>
                <a
                  className={`button special`}
                  href={`https://docs.google.com/forms/d/e/1FAIpQLSfYUyCzVw4RQ-HIvY1fhZbsE3u1TXOf2YxRrJxzakNpeAaysA/viewform`}>
                  Sign the platform here
                </a>
              </Col>
              <Col size={6}>
                <Link className={`button`} to={`/demands-es`}>
                  Leer en español
                </Link>
              </Col>
            </Grid>
          </Header>
        </div>
      </section>

      <Container>
        <div css={css`margin-top: 2rem;`} />
        <Grid>
          <Col size={6}>
            <Img fluid={data.image01.childImageSharp.fluid} round={5} />
          </Col>

          <Col size={6}>
            <Demand>We want a future free from debt.</Demand>
            <SubDemand>
              Immediately Cancel Rent, Mortgage and Utility Payments, No New Debts.
            </SubDemand>
            <p>
              Cancel rent &amp; mortgage and utility payments through the duration of the public
              health and economic crisis for all renters, homeowners and small businesses, and
              ensure a 3-month recovery period.
            </p>
          </Col>
        </Grid>

        <Grid
          css={css`
            margin-top: 1rem;
          `}>
          <Col size="12">
            <Demand>
              We want a future with safe, dignified and cage-free shelter, sanctuary and homes for
              all.
            </Demand>
            <SubDemand>
              Turn Vacant Units into Safe Homes and Decrease the Spread of COVID-19 by Releasing
              People from Cages.
            </SubDemand>
          </Col>
        </Grid>

        <Grid>
          <Col size={6}>
            <p>
              We must guarantee that every single person has a safe, healthy home during a public
              health crisis, and beyond. We demand the local, state and federal governments turn all
              vacant units into safe homes for people experiencing homelessness or needing healthy
              housing now.
            </p>

            <p>
              Further we echo the demands of people experiencing incarceration and detention and
              call for action to ensure the health and wellbeing of people currently imprisoned and
              to mitigate the spread of COVID-19.
            </p>
          </Col>

          <Col size={6}>
            <p>
              We call for the immediate release of all people who are being held in immigrant and
              pretrial detention. Increase the use of Elder, Medical, and Early Release. Immediately
              release all individuals who are 50 years old or older, are immunocompromised, and/or
              have underlying medical conditions that pose increased risk from a COVID-19 infection.
              Release all individuals who have 90 days or less remaining in their sentence, and
              accelerate the release of individuals with more than 90 days remaining. Release people
              without using electronic monitors.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <SubDemand>
              Permanent Refuge and Moratorium on Evictions, Foreclosures, Raids, Sweeps
            </SubDemand>

            <p>
              All people must be able to stay in their homes, be provided adequate housing, be
              allowed to safely shelter-in-place whether they are housed or unhoused, and be able to
              maintain all of their belongings to ensure personal and public health and safety.
              Cities must provide comprehensive support to those “sheltering-in-place” outside.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <Demand>
              {' '}
              We want a future where utilities vital to our personal and collective health are
              guaranteed.
            </Demand>
            <SubDemand>
              Prohibit Utility Shut Offs, Rate Increases and Restore Service to all Households
            </SubDemand>
            <p>
              Utilities like water, gas, electric, phone and internet are vital to our personal and
              collective health. They should be provided as a public good, especially during a
              public health crisis. Any current utility service shut-offs should be suspended
              indefinitely for all households, regardless of ability to pay.
            </p>
          </Col>
        </Grid>

        <Grid>
          <Col size="12">
            <Demand>We want a future where our work is valued and protected.</Demand>
            <Grid>
              <Col size={5}>
                <Img fluid={data.image02.childImageSharp.fluid} round={5} />
              </Col>

              <Col size={6.8}>
                <SubDemand>
                  Guarantee unemployment, sick-time and paid leave, health care, safety and
                  protections for workers, and a living-wage for all.
                </SubDemand>
                <p>
                  All people, regardless of status, must have access to the resources they need to
                  provide for their needs, safety and health. People doing essential work must be
                  provided with the equipment that is necessary to keep them safe in addition to any
                  necessary child or elder care for their loved ones.
                </p>
              </Col>
            </Grid>
          </Col>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Demands
