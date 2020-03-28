import { Link } from 'gatsby'
import { motion, AnimatePresence } from 'framer-motion'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Title = styled.h2`
  text-transform: uppercase;
  font-family: 'Kalam-Bold', 'Kalam';
  font-size: 3.2rem;
  margin-bottom: 0;
  text-decoration: none;
  border-bottom: none;
`

const Subtitle = styled.h3`
  display: inline-block;
  max-width: 90%;
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

const letter = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default () => (
  <AnimatePresence>
    <motion.section style={{paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '3rem', paddingTop: '2rem'}} initial="hidden" pointerEvents="none" animate="show" variants={container(0.3)}>
      <div style={{maxWidth: '70vw', marginLeft: 'auto', marginRight: 'auto'}}>
        <header style={{maxWidth: '80vw', marginLeft: 'auto', marginRight: 'auto', borderBottom: '1px solid white', marginBottom: '2rem', paddingTop: '2rem'}}>
          <Title>Beyond Recovery</Title>
          <Subtitle>A people’s plan to ensure a healthy, stable, thriving future for us all.</Subtitle>
        </header>

        <div style={{maxWidth: '95%'}}>
          <p>
            Our homes, health, and collective safety and futures are on the line. Millions of us don’t know how we are
            going to pay our rent, mortgage, or utilities on April 1st, yet landlords and banks are expecting payment as
            if it’s business as usual. It’s not.
          </p>

          <p>
            Join millions of us to fight for a future free from debt and to win a national suspension on rent, mortgage
            and utility payments!
          </p>

          <ul className="actions" style={{ marginTop: '2rem' }}>
            <li>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbGN61jHfXPEzE7G5Cw2Jb6a1T1XHFufYTuXniaw5eVos2Nw/viewform" className="button next">
                Sign the Demands Platform here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  </AnimatePresence>
)
