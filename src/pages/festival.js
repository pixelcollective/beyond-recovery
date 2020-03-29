import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Callout from '../components/Callout'
import pic from '../assets/images/30271820676_e46b9f31e4_o.jpg'

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
      <title>Cancel Rent Festival</title>
      <meta
        name="description"
        content="Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>#CancelRent Festival</h1>
          </header>
          <p>
            The coronavirus crisis has made many of us stuck between staying healthy or staying housed. With the loss of
            our incomes, we may not be able to make rent on April 1st or May 1st. We’re envisioning a future beyond
            recovery and calling out to our electeds to cancel rent and mortgages and guarantee homes for all!
          </p>
          <p>
            Rent Parties have deep roots in the Black struggle for freedom, self-determination and mutual aid. We're
            bringing back this hundred year old tradition to demand a just response to coronavirus.
          </p>
          <h2>Join us for 9 consecutive days of the #CancelRent Festival!</h2>{' '}
          <p>
            Our first performance on Sunday, March 29th at 5pm ET/ 2pm PT with Grammy-nominated artist Aloe Blacc! Come
            back every week day at 9pm ET/6pm PT and weekends at 5pm ET/2pm PT on Youtube Live, where talented and
            notable acts will raise our demands while we dance!
          </p>
          <div class="box">
            <Grid>
              <Col size="6">
                <h2>#CancelRent Festival Lineup </h2>
                <p>
                  <ul>
                    <li>3/29 - Aloe Blacc</li>
                    <li> 3/30 - Quetzal Flores</li>
                    <li>3/31 - Ana Tijoux</li>
                    <li>4/1 - Direct Action Livestream</li>
                    <li>4/2 - Vaneza Songwriting Session</li>
                    <li>4/3 - La Marisoul</li>
                    <li>4/4 - Jose Luis Orozco</li>
                    <li>4/5 - TBD 4</li>
                    <li>4/6 - CharLA: Community Forum/Discussion</li>
                  </ul>
                </p>
              </Col>
              <Col size="6">
                <Image src={pic} round={5} />
              </Col>
            </Grid>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
