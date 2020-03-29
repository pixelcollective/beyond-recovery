import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Banner from '../components/BannerSoon'

/**
 * Home Page Component
 */
export default () => (
  <>
    <Helmet
      title="BEYOND RECOVERY"
      meta={[
        {
          name: 'description',
          content: 'A people’s plan to ensure a healthy, stable, thriving future for us all.',
        },
        {
          name: 'keywords',
          content: 'beyond recovery, rent strike',
        },
      ]}>
      <html lang="en" />
    </Helmet>
    <Banner />
  </>
)
