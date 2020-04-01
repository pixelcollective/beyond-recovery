import Image from 'gatsby-image'
import { motion, AnimatePresence } from 'framer-motion'
import { Flex, Box, Button } from 'rebass'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Kalam-Bold', 'Kalam';
  font-size: 3.2rem;
  margin-bottom: 0;
  text-decoration: none;
  border-bottom: none;
  line-height: 1.1;
`

const Subtitle = styled.h3`
  display: inline-block;
  max-width: 100%;
`

const Logo = styled(Image)`
  z-index: 30;
`

const container = (delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: delay || 0,
    },
  },
  grow: {
    opacity: 1,
    scale: 1.2,
  },
})

export default ({ logoSrc }) => (
  <AnimatePresence>
    <motion.section
      style={{
        position: 'relative',
        paddingTop: '1.5rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingBottom: '3rem',
      }}
      initial="hidden"
      pointerEvents="none"
      animate="show"
      variants={container(0.3)}>
      <div
        style={{
          zIndex: 100,
          maxWidth: '70vw',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}>
        <header
          style={{
            maxWidth: '80vw',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderBottom: '1px solid white',
            marginBottom: '3rem',
            paddingTop: '4rem',
          }}>
          <Title>Beyond Recovery</Title>
          <Subtitle>A people’s plan to ensure a healthy, stable, thriving future for us all.</Subtitle>
        </header>

        <Flex flexWrap={'wrap'} mx={-2}>
          <Box pr={2} py={2} width={1 / 3} display={['none', 'inline-block']} fontSize={[1, 3]}>
            <motion.div
              animate={{
                scale: 1,
                x: -20,
              }}
              whileHover={{
                scale: 1.1,
                duration: 0.25,
                x: -40,
                transition: {
                  type: 'spring',
                  stiffness: 100,
                },
              }}
              transition={{
                type: 'spring',
                stiffness: 100,
              }}>
              <Logo fluid={logoSrc} />
            </motion.div>
          </Box>
          <Box px={2} py={2} width={[1, 2 / 3]}>
            <p>
              Our homes, health, and collective safety and futures are on the line. Millions of us don’t know how we are
              going to pay our rent, mortgage, or utilities on April 1st, yet landlords and banks are expecting payment
              as if it’s business as usual. It’s not.
            </p>

            <p>
              Join millions of us to fight for a future free from debt and to win a national suspension on rent,
              mortgage and utility payments!
            </p>

            <Subtitle>Worried about rent?</Subtitle>
            <ul className="actions">
              <li>
                <motion.div
                  initial={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.2,
                    duration: 0.25,
                    animate: {
                      y: 100,
                    },
                    transition: {
                      type: 'spring',
                      stiffness: 100,
                    },
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                  }}>
                  <Button
                    role="link"
                    css={css`
                      &:hover {
                        background-color: white;
                        color: #ff6d00;
                        transition: all 0.2s ease-in-out;
                      }
                    `}
                    onClick={() => {
                      return window.location.replace(
                        'https://docs.google.com/forms/d/e/1FAIpQLSdbGN61jHfXPEzE7G5Cw2Jb6a1T1XHFufYTuXniaw5eVos2Nw/viewform',
                      )
                    }}
                    fontSize={1}
                    className="button">
                    Join us here
                  </Button>
                </motion.div>
              </li>
            </ul>
          </Box>
        </Flex>
      </div>
    </motion.section>
  </AnimatePresence>
)
