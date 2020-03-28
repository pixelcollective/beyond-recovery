import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
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
      <Layout>
        <Helmet
          title="BEYOND RECOVERY"
          meta={[
            {
              name: 'description',
              content: 'A people’s plan to ensure a healthy, stable, thriving future for us all.',
            },
            { name: 'keywords', content: 'beyond recovery, rent strike' },
          ]}
        />

        <Banner />

        <div id="main" style={{ maxWidth: '100vw' }}>
          <section style={{ maxWidth: '100vw' }}>
            <Callout />
          </section>

          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>Aliquam</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>

            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home
