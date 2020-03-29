import React from 'react'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import CancelRent from './CancelRent'
import { ParallaxBox } from "./parts/parallaxBox";

injectGlobal`
  #wrapper {
    padding-top: 0;
  }

  #header.alt {
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
  }
`

const Banner = styled.section`
  position: relative;
  height: 70vh;
  width: 100vw;
  z-index: 0;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: hidden;
  object-fit: cover;
  object-position: center center;
`

const BackgroundImage = styled(Image)`
  position: fixed;
  top: 0;
  height: 100%;
  width: 400vw;
  object-fit: cover;
  object-position: center center;
`

const Scrim = styled.div`
  background: linear-gradient(
    to bottom left,
    rgba(139, 0, 0, 0.3) 0%,
    #ff9201 80%,
    rgba(255, 115, 1, 0.8) 100%
  );
  content: '';
  display: block;
  min-height: 70vh;
  height: 70vh;
  opacity: 0.1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 10;
  position: absolute;
`

const Messaging = () => (
  <div
    css={css`
      z-index: 20;
      position: absolute;
      top: 120px;
      * {
        max-width: 70vw;
      }
    `}>
        <ParallaxBox triggerPoint={300} fadeOut={true} yOffset={0}>

    <CancelRent height={'40vh'} />
    </ParallaxBox>
  </div>
)

const Logo = styled(Image)`
  position: absolute;
  right: 10vw;
  top: calc(80vh);
  height: 20vh;
  z-index: 30;
`

const BannerContainer = ({ bgSrc, logoSrc }) => (
  <>
  <Banner>
    <ParallaxBox fadeOut={true} triggerPoint={0.5} yOffset={1200}>
      <BackgroundImage fluid={bgSrc} alt="Rent strikers fight for an equitable future." />

    </ParallaxBox>

    <ParallaxBox fadeOut={true} triggerPoint={0} yOffset={30}>
      <Scrim />
    </ParallaxBox>

      <Messaging />
  </Banner>
  </>
)

export default BannerContainer
