import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Callout from '../components/Callout'
import pic1 from '../assets/images/29676270444_5e09913cd5_o.jpg'
import pic2 from '../assets/images/30220396141_e45769c364_o.jpg'
import pic3 from '../assets/images/30221094971_5494396af1_o.jpg'
import pic4 from '../assets/images/30220593851_55f8bc7af5_o.jpg'
import pic5 from '../assets/images/29676278054_4b8b6994ab_o.jpg'

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${(props) => props.round || 0}px;
`

const space = 1.5
const smallScreen = `980px`

const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
  }
`

const Col = styled.div`
  width: ${(props) => (props.size / 12) * 100 - 2}%;
  display: flex;
  flex-direction: column;
  margin: ${space / 2}rem auto ${space / 2}rem auto;

  &::first-of-type,
  &::last-of-type {
    width: ${(props) => (props.size / 12) * 100}%;
  }

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
    width: 100%;
  }
`

const Generic = (props) => (
  <Layout>
    <Helmet>
      <title>Demands</title>
      <meta
        name="description"
        content="We demand a coronavirus recovery that leaves us safely housed and free of debt."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Demandas</h1>
            <h3>Reclamaciones para asegurar comunidades saludables, estables, prósperas y un futuro para todxs </h3>
            <Grid>
              <Col size="6">
                <a
                  className="button special"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfYUyCzVw4RQ-HIvY1fhZbsE3u1TXOf2YxRrJxzakNpeAaysA/viewform">
                  Sign the platform here
                </a>
              </Col>
              <Col size="6">
                {' '}
                <a
                  className="button"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfYUyCzVw4RQ-HIvY1fhZbsE3u1TXOf2YxRrJxzakNpeAaysA/viewform">
                  Leer en español
                </a>
              </Col>
            </Grid>
          </header>
          <hr />

          <Grid>
            <Col size="6">
              <Image src={pic3} round={5} />
            </Col>

            <Col size="6">
              <h2>We want a future free from debt.</h2>
              <h3>Immediately Cancel Rent, Mortgage and Utility Payments, No New Debts. </h3>
            </Col>

            <Col size="12">
              <p>
                Cancel rent &amp; mortgage and utility payments through the duration of the public health and economic
                crisis for all renters, homeowners and small businesses, and ensure a 3-month recovery period.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <Image src={pic4} round={5} />
            </Col>

            <Col size="6">
              <h2>We want a future with safe, dignified and cage-free shelter, sanctuary and homes for all.</h2>
              <h3>
                Turn Vacant Units into Safe Homes and Decrease the Spread of COVID-19 by Releasing People from Cages.
              </h3>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <p>
                We must guarantee that every single person has a safe, healthy home during a public health crisis, and
                beyond. We demand the local, state and federal governments turn all vacant units into safe homes for
                people experiencing homelessness or needing healthy housing now.
              </p>

              <p>
                Further we echo the demands of people experiencing incarceration and detention and call for action to
                ensure the health and wellbeing of people currently imprisoned and to mitigate the spread of COVID-19.
              </p>
            </Col>

            <Col size="6">
              <p>
                We call for the immediate release of all people who are being held in immigrant and pretrial detention.
                Increase the use of Elder, Medical, and Early Release. Immediately release all individuals who are 50
                years old or older, are immunocompromised, and/or have underlying medical conditions that pose increased
                risk from a COVID-19 infection. Release all individuals who have 90 days or less remaining in their
                sentence, and accelerate the release of individuals with more than 90 days remaining. Release people
                without using electronic monitors.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="12">
              <h3>Permanent Refuge and Moratorium on Evictions, Foreclosures, Raids, Sweeps</h3>

              <p>
                All people must be able to stay in their homes, be provided adequate housing, be allowed to safely
                shelter-in-place whether they are housed or unhoused, and be able to maintain all of their belongings to
                ensure personal and public health and safety. Cities must provide comprehensive support to those
                “sheltering-in-place” outside.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <Image src={pic2} round={5} />
            </Col>

            <Col size="6">
              <h2>We want a future where utilities vital to our personal and collective health are guaranteed.</h2>
              <h3>Prohibit Utility Shut Offs, Rate Increases and Restore Service to all Households</h3>
            </Col>
          </Grid>

          <Grid>
            <Col size="12">
              <p>
                Utilities like water, gas, electric, phone and internet are vital to our personal and collective health.
                They should be provided as a public good, especially during a public health crisis. Any current utility
                service shut-offs should be suspended indefinitely for all households, regardless of ability to pay.
              </p>
            </Col>
          </Grid>

          <Grid>
            <Col size="6">
              <Image src={pic5} round={5} />
            </Col>

            <Col size="6">
              <h2>We want a future where our work is valued and protected.</h2>
              <h3>
                Guarantee unemployment, sick-time and paid leave, health care, safety and protections for workers, and a
                living-wage for all.
              </h3>
            </Col>
          </Grid>

          <Grid>
            <Col size="12">
              <p>
                All people, regardless of status, must have access to the resources they need to provide for their
                needs, safety and health. People doing essential work must be provided with the equipment that is
                necessary to keep them safe in addition to any necessary child or elder care for their loved ones.
              </p>
            </Col>
          </Grid>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
