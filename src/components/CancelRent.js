import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Banner
 */
export default ({ width, height }) => (
  <div>
    <svg
      role="heading"
      aria-label="Cancel Rent, Cancel Mortages, Guarantee Homes for All"
      viewBox="0 0 990.323 487.376"
      pointerEvents="none"
      height={height || null}
      width={width || null}>
      <title>Cancel Rent</title>
      <g>
        <CancelRentBg />
        <CancelRentText />

        <CancelMortgagesBg />
        <CancelMortgagesText />

        <GuaranteeBg />
        <GuaranteeText />
      </g>
    </svg>
  </div>
)

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

/**
 * Cancel Rent
 */
const CancelRentBg = (props) => (
  <AnimatePresence>
    <motion.path
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      d="M0,68.357l80.565-7.8h92.277L320.525,49.933l131.1-6.614,65.22-6.273,5.029,23.506L503.543,120.89l-97.774,19.691L242.833,157.526l-103.384,16.56L44.378,189.773H0Z"
    />
  </AnimatePresence>
)

const CancelRentText = (props) => (
  <motion.text
    initial="hidden"
    pointerEvents="none"
    animate="show"
    variants={container(0.3)}
    transform="matrix(0.995, -0.098, 0.098, 0.995, 34.5, 159.637)"
    fill="#ff9201"
    fontSize="87.215"
    fontFamily="Kalam-Bold, Kalam"
    fontWeight="700"
    letterSpacing="-0.02em">
    {'Cancel Rent'.split('').map((char, id) => (
      <motion.tspan pointerEvents="none" key={id} variants={letter}>
        {char}
      </motion.tspan>
    ))}
  </motion.text>
)

/**
 * Cancel Mortgages
 */
const CancelMortgagesBg = (props) => (
  <AnimatePresence>
    <motion.path
      role="decorative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      d="M0,223.859V328.944L212.015,311.4h93.54L583.464,271.08l52.65-20.647,57.655-7.3h27.837c6.959,0,0-88.95,0-88.95h-60.22l-310.178,28.1-216.68,19.631-39.334,13.2Z"
    />
  </AnimatePresence>
)

const CancelMortgagesText = (props) => (
  <AnimatePresence>
    <motion.text
      initial="hidden"
      animate="show"
      cursor="default"
      variants={container(0.4)}
      pointerEvents="none"
      transform="matrix(0.995, -0.098, 0.098, 0.995, 47.795, 295)"
      fill="#fff"
      fontSize="87.215"
      fontFamily="Kalam-Bold, Kalam"
      fontWeight="700"
      letterSpacing="-0.02em">
      {'Cancel Mortgages'.split('').map((char, id) => (
        <motion.tspan pointerEvents="none" key={id} variants={letter}>
          {char}
        </motion.tspan>
      ))}
    </motion.text>
  </AnimatePresence>
)

/**
 * Guarantee
 */
const GuaranteeBg = (props) => (
  <AnimatePresence>
    <motion.path
      role="decorative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      d="M 0.4999626576900482 497.9578247070312 L 0.4999626576900482 383.2513732910156 L 333.1409606933594 349.4650268554688 L 611.3927612304688 319.9507446289062 C 614.1052856445312 319.7749938964844 826.5125122070312 306.0215148925781 830.19482421875 306.0215148925781 C 833.8457641601562 306.0215148925781 977.6578979492188 293.8406066894531 989.323486328125 292.8519897460938 L 989.323486328125 329.0859069824219 L 989.323486328125 382.3600463867188 L 859.7384643554688 399.1220397949219 L 584.4192504882812 433.0388488769531 C 583.355224609375 433.0788879394531 547.5462036132812 434.43798828125 499.2578430175781 437.4450378417969 C 470.6080932617188 439.2291564941406 443.2362060546875 441.2355346679688 417.9022216796875 443.4086608886719 C 386.2327270507812 446.1252746582031 357.6763305664062 449.1115417480469 333.0265808105469 452.2843933105469 C 277.2108459472656 459.4689025878906 250.7507171630859 463.4117736816406 238.382080078125 465.4544067382812 C 232.8297119140625 466.3712768554688 228.7094573974609 467.1372680664062 226.4664611816406 467.6692810058594 C 225.4750061035156 467.9045104980469 224.95556640625 468.0592346191406 224.6807250976562 468.2054138183594 L 0.4999626576900482 497.9578247070312 Z"
    />
  </AnimatePresence>
)
const GuaranteeText = (props) => (
  <AnimatePresence>
    <motion.text
      initial="hidden"
      animate="show"
      cursor="default"
      userSelect="none"
      pointerEvents="none"
      variants={container(0.5)}
      transform="matrix(0.995, -0.098, 0.098, 0.995, 64.414, 464.204)"
      fill="#fc9001"
      fontSize="87.215"
      fontFamily="Kalam-Bold, Kalam"
      fontWeight="700"
      letterSpacing="-0.02em">
      {'Guarantee Homes for All'.split('').map((char, id) => (
        <motion.tspan pointerEvents="none" key={id} variants={letter}>
          {char}
        </motion.tspan>
      ))}
    </motion.text>
  </AnimatePresence>
)
