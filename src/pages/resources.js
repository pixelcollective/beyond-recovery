/**
 * Modules
 */
import React from 'react'
import {Helmet} from 'react-helmet'
import {css} from '@emotion/core'
import Layout from '../components/layout'
import {Grid, Col, Header, PageTitle, PageSubTitle} from '../components/parts/demands'

/**
 * Page: Resources
 */
const Resources = () => (
  <Layout>
    <Helmet
      title={'Resources'}
      meta={[
        {
          name: 'description',
          content:
            'We demand a coronavirus recovery that leaves us safely housed and free of debt.',
        },
        {
          name: 'keywords',
          content: 'beyond recovery, rent strike',
        },
      ]}>
      <html lang={'en'} />
    </Helmet>

    <section
      id="banner"
      css={css`
        & > * {
          min-height: 100vh;
          display: flex;
          flex-direction: col;
          align-content: center;
          justify-content: center;
        }
      `}>
      <div className="inner">
        <Header>
          <Grid>
            <Col size="12">
              <PageTitle>Resources</PageTitle>
              <PageSubTitle>
                A people’s plan to ensure a healthy, stable, thriving future for us all.
              </PageSubTitle>
            </Col>
          </Grid>
          <Grid>
            <Col size={6}>
              <a className={`button special`} href={`/tool`}>
                Tools
              </a>
            </Col>

            <Col size={6}>
              <a className={`button special`} href={`/training`}>
                Trainings
              </a>
            </Col>
          </Grid>
        </Header>
      </div>
    </section>
  </Layout>
)

export default Resources
