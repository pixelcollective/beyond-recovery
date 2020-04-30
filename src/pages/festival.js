import React from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Callout from '../components/Callout'
import pic from '../assets/images/30271820676_e46b9f31e4_o.jpg'
import YouTube from 'react-youtube'
import {Box} from 'rebass'

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: ${props => props.round || 0}px;
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
  width: ${props => (props.size / 12) * 100 - 2}%;
  display: flex;
  flex-direction: column;
  margin: ${space / 2}rem auto ${space / 2}rem auto;

  &::first-of-type,
  &::last-of-type {
    width: ${props => (props.size / 12) * 100}%;
  }

  @media screen and (max-width: ${smallScreen}) {
    flex-direction: column;
    width: 100%;
  }
`

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Cancel Rent Festival</title>
      <meta
        name="description"
        content="Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s."
      />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>#CancelRent Festival</h1>
          </header>
          <Box mb={4}>
            <YouTube
              videoId={'3wiH-4-oTmA'}
              id={null}
              className={null}
              containerClassName={''}
              opts={{
                height: '500',
                width: '100%',
                playerVars: {
                  autoplay: 1,
                },
              }}
              onReady={() => null}
              onPlay={() => null}
              onPause={() => null}
              onEnd={() => null}
              onError={() => null}
              onStateChange={() => null}
              onPlaybackRateChange={() => null}
              onPlaybackQualityChange={() => null}
            />
          </Box>
          <p>
            With the coronavirus crisis, many of us are stuck between staying healthy or staying
            housed. With the loss of our incomes, we may not be able to make rent on April 1st or
            May 1st.  We’re envisioning a future beyond recovery and calling out to our electeds to
            #CancelRent #CancelMortgages and guarantee #HomesForAll!
          </p>
          <p>
            Rent Parties have deep roots in the Black struggle for freedom, self-determination and
            mutual aid. We're bringing back this hundred year old tradition to demand a just
            response to coronavirus.
          </p>
          <p>
            Join us for 10 consecutive days of the{' '}
            <a href="https://www.facebook.com/events/1110752565940021/">#CancelRent Festival</a>!
            Our first performance on Sunday, March 29th kicked off with Grammy-nominated artist{' '}
            <a href="https://www.youtube.com/watch?v=gaKHuBRFt7E&feature=youtu.be">Aloe Blacc!</a>
          </p>
          <p>
            Come back at 9pm ET/6pm PT everyday and tune in early on weekends at 5pm ET/2pm PT for
            bonus shows, where talented and notable acts will{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYUyCzVw4RQ-HIvY1fhZbsE3u1TXOf2YxRrJxzakNpeAaysA/viewform">
              raise our demands
            </a>{' '}
            while we dance! For more information on the #CancelRent Festival lineup, to register for
            the writing sessions and community discussions, and to invite your friends, family and
            community to join us check out the{' '}
            <a href="https://www.facebook.com/events/1110752565940021/">
              #CancelRent Festival on Facebook
            </a>
            !
          </p>
          <p>
            Spanish interpretation will be provided. // Se proporcionará interpretación en español.
          </p>
          <p>Para traducción al español, llame al: 646-558-8656</p>
          <p>Código/ID de la reunión: 989-000-9035</p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
