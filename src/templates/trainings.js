import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {Flex, Box, Text} from 'rebass'
import {Grid, Col, PageSubTitle} from '../components/parts/demands'

/**
 * Components
 */
import Layout from '../components/layout'
import {VideoComponent} from './training'

/**
 * Styled components
 */
const Title = styled.h1`
  font-family: 'Kalam Bold', 'Kalam';
  font-size: 4rem;
  letter-spacing: 0.1ch;
  margin-bottom: 0;
  padding-bottom: 0;
`

/**
 * Constants
 */
const DEFAULT_TITLE = 'Renter Nation Training Series'
const DEFAULT_DESCRIPTION =
  'Party with us at a 9 day virtual festival in the spirit of the iconic Rent Parties of the 1920s and 30s.'

/**
 * Single Action
 *
 * @param {string} image
 * @param {string} title
 * @param {string} slug
 * @param {string} description
 */
const Training = ({title, slug, description, youtubeId, episode}) => (
  <Box>
    <div className="inner">
      <PageSubTitle>{`Episode #${episode}`}</PageSubTitle>
      <VideoComponent youtubeId={youtubeId || null} />
    </div>

    <Link to={`/training/${slug}`}>
      <PageSubTitle>{title}</PageSubTitle>
    </Link>

    <Text color={'white'} dangerouslySetInnerHTML={{__html: description || description}} />
  </Box>
)

/**
 * Trainings Template
 *
 * @param {string} title
 * @param {string} description
 * @param {object} Trainings
 */
const TrainingsTemplate = ({title, description, trainings}) => (
  <Layout>
    <Helmet>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Renter Nation Training Series</h1>
          </header>

          <Box
            sx={{
              display: 'grid',
              gridRow: 'auto',
              gridGap: 3,
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              flexDirection: 'row',
            }}>
            {trainings.edges.map(
              (
                {
                  node: {
                    frontmatter: {title, description, youtubeId, episode},
                    fields: {slug},
                  },
                },
                id,
              ) => (
                <Training
                  key={id}
                  title={title}
                  episode={episode}
                  description={description}
                  slug={slug}
                  youtubeId={youtubeId}
                />
              ),
            )}
          </Box>
        </div>
      </section>
    </div>
  </Layout>
)

export default TrainingsTemplate
