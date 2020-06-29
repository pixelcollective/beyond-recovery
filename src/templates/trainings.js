import React from 'react'
import {Link} from 'gatsby'
import styled from '@emotion/styled'
import {Helmet} from 'react-helmet'
import {Flex, Box, Text} from 'rebass'

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
const DEFAULT_TITLE = 'Blog'
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
const Training = ({title, slug, description, youtubeId}) => (
  <Flex flexWrap="wrap" mx={-2}>
    <Box px={2} py={2} width={1}>
      <Link to={`/training/${slug}`}>
        <Title>{title}</Title>
      </Link>

      <div className="inner">
        <Box width={[1]}>
          <VideoComponent youtubeId={youtubeId || null} />
        </Box>
      </div>

      <Box px={2}>
        <Text color={'white'} dangerouslySetInnerHTML={{__html: description || description}} />
      </Box>
    </Box>
  </Flex>
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
            <h1>{title || DEFAULT_TITLE}</h1>
          </header>

          {trainings.edges.map(
            (
              {
                node: {
                  frontmatter: {title, description, youtubeId},
                  fields: {slug},
                },
              },
              id,
            ) => (
              <Training
                key={id}
                title={title}
                description={description}
                slug={slug}
                youtubeId={youtubeId}
              />
            ),
          )}
        </div>
      </section>
    </div>
  </Layout>
)

export default TrainingsTemplate
