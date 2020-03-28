import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Callout from '../components/Callout'
import pic from '../assets/images/29676270444_5e09913cd5_o.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Demands</title>
      <meta name="description" content="Page description." />
    </Helmet>

    <div id="main" className="alt">
      <Callout />
      <section id="one">
        <div className="inner">

          <header className="major">
            <h1>Demands.</h1>
          </header>

          <span className="image main">
            <img src={pic} alt="" />
          </span>

          <p>
            This is the content.
          </p>

          <h4>Left &amp; Right</h4>
              <p>
                <span className="image left">
                  <img src={pic} alt="" />
                </span>
                Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod.
                Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus
                euismod. Vestibulum ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
                faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus.
                Integer ac pellentesque praesent tincidunt felis sagittis eget tempus vestibulum ante ipsum primis in
                faucibus magna blandit adipiscing eu felis iaculis.
              </p>

              <div className="grid-wrapper">
            <div className="col-6">
              <h3>Sem turpis amet semper</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed ante lacinia. Sapien a lorem
                in integer ornare praesent commodo adipiscing arcu in massa commodo lorem accumsan at odio massa ac ac.
                Semper adipiscing varius montes viverra nibh in adipiscing blandit tempus accumsan.
              </p>
            </div>

            <div className="col-6">
              <h3>Magna odio tempus commodo</h3>
              <p>
                In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac integer lobortis
                commodo ornare aliquet accumsan erat tempus amet porttitor. Ante commodo blandit adipiscing integer
                semper orci eget. Faucibus commodo adipiscing mi eu nullam accumsan morbi arcu ornare odio mi adipiscing
                nascetur lacus ac interdum morbi accumsan vis mi accumsan ac praesent.
              </p>
            </div>

            <div className="col-4">
              <h3>Interdum sapien gravida</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.
              </p>
            </div>

            <div className="col-4">
              <span className="image fit">
                <img src={pic} alt="" />
              </span>
            </div>

            <div className="col-4">
              <h3>Accumsan montes viverra</h3>
              <p>
                Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non
                faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
                varius montes viverra nibh in adipiscing blandit tempus accumsan.
              </p>
            </div>
          </div>

          <p>
            <a href="#" title="link">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a> Duis dapibus rutrum facilisis. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh
            porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
            aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>

          <p>
            <Link to="/elements">Interdum et malesuada fames ac ante ipsum primis in faucibus.</Link> Pellentesque venenatis dolor imperdiet dolor
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
