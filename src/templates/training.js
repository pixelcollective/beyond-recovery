import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import {Box, Text} from 'rebass'
import YouTube from 'react-youtube'
import {PageSubTitle} from '../components/parts/demands'

/**
 * Video Component
 *
 * @param {string} youtubeId
 */
const VideoComponent = ({youtubeId}) => (
  <Box fontFamily={'system-ui'}>
    <YouTube
      videoId={youtubeId}
      id={null}
      className={null}
      containerClassName={''}
      opts={{
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      }}
      onReady={() => null}
      onPlay={() => null}
      onPause={() => null}
      onEnd={() => null}
      onError={() => null}
      onStateChange={() => null}
      onPlaybackRateChange={() => null}
      onPlaybackQualityChange={() => null}
    />
  </Box>
)

/**
 * Training Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} youtubeId
 */
const TrainingTemplate = ({title, description, youtubeId}) => (
  <Layout>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description || null} />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header style={{marginTop: '1rem'}}>
            <PageSubTitle>{title}</PageSubTitle>
          </header>

          <div className="inner">
            <Box width={[1]}>
              <VideoComponent youtubeId={youtubeId || null} />
            </Box>
          </div>

          <Box px={2}>
            <Text color={'white'} dangerouslySetInnerHTML={{__html: description || description}} />
          </Box>
        </div>
      </section>
    </div>
  </Layout>
)

/**
 * Training Page
 *
 * @param {string} title
 * @param {string} secondaryTitle
 * @param {string} script
 * @param {string} embed
 */
const TrainingPage = ({
  pageContext: {
    data: {title, description, youtubeId},
  },
}) => <TrainingTemplate title={title} description={description} youtubeId={youtubeId} />

export {TrainingTemplate, VideoComponent}
export default TrainingPage
