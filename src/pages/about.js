import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Layout from '../components/layout'
import Callout from '../components/Callout'

const Generic = (props) => (
  <Layout>
    <Helmet>
      <title>About</title>
      <meta
        name="description"
        content="We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed."
      />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About</h1>
          </header>
          <p>
            The Beyond Recovery campaign is initiated by the Homes For All campaign and the Right To The City Alliance.
            Homes For All is a grassroots people’s movement fighting to win permanent, dignified and affordable homes
            for all people.
          </p>
        </div>
      </section>
      <Callout />
    </div>
  </Layout>
)

export default Generic
