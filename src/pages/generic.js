import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Callout from '../components/Callout'
import pic from '../assets/images/29676270444_5e09913cd5_o.jpg'

const Generic = (props) => (
  <Layout>
    <Helmet>
      <title>Page Title</title>
      <meta name="description" content="Page description." />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <Callout />
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Page title</h1>
          </header>

          <span className="image main">
            <img src={pic} alt="" />
          </span>

          <p>This is the content.</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
            porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
            aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>

          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
            mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris,
            consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit.
            Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
