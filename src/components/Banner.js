import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import CancelRentComponent from './CancelRent'
import backgroundSrc from '../assets/images/background.png'
import logoSrc from '../assets/images/logo.png'

const Banner = styled.section`
  max-width: 100vw;
  width: 100%;
  height: 80vh;
  max-width: 100vw;
  overflow-x: hidden;
  max-height: 100vh;
  overflow-y: hidden;
`

const BackgroundImage = styled.img`
  && {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    height: 100vh;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
    object-position: center center;
  }
`

const Scrim = styled.div`
  && {
    position: absolute;
    background: linear-gradient(to bottom left, rgba(139, 0, 0, 0.8) 0%, #ff9201 80%, rgba(255, 115, 1, 1) 100%);
    content: '';
    display: block;
    min-height: 100%;
    height: 100vh;
    opacity: 0.8;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -10;
    max-width: 100vw;
  }
`

const CancelRent = styled(CancelRentComponent)``

const Messaging = () => (
  <div
    css={css`
      position: absolute;
      top: 15vh;
      z-index: 0;
      max-width: 80vw;

      * {
        max-width: 90vw;
      }
    `}>
    <CancelRent height={'40vh'} />
  </div>
)

const Logo = styled(motion.img)`
  position: absolute;
  right: 10vw;
  top: calc(60vh);
  height: 20vh;
  z-index: 50;
`

const BannerContainer = () => (
  <Banner>
    <BackgroundImage src={backgroundSrc} />
    <Scrim />
    <Messaging />
    <AnimatePresence>
      <Logo
        style={{
          opacity: 0,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 3,
            duration: 1,
          },
        }}
        whileHover={{
          scale: 1.3,
          transition: {
            type: 'spring',
            damping: 10,
            stiffness: 100,
          },
          animate: {
            rotateX: `20deg`,
            duration: 3,
          },
        }}
        src={logoSrc}
      />
    </AnimatePresence>
  </Banner>
)

export default BannerContainer
