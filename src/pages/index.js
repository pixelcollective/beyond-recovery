import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/BannerSoon'
import Callout from '../components/Callout'
import pic01 from '../assets/images/29676243823_a82bc1678f_o.jpg'
import pic02 from '../assets/images/30220593851_55f8bc7af5_o.jpg'
import pic03 from '../assets/images/30221095941_ecee6778e8_o.jpg'
import pic04 from '../assets/images/30191159352_1f5bf7cb6d_o.jpg'
import pic05 from '../assets/images/30271820676_e46b9f31e4_o.jpg'
import pic06 from '../assets/images/30306790745_3ceb0fee8b_o.jpg'

/**
 * Home Page Component
 */
class Home extends Component {
  render() {
    return (
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
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Banner />
      </>
    )
  }
}

export default Home
