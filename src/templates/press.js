/**
 * Modules
 */
import React from 'react'
import {Helmet} from 'react-helmet'
import {Box, Text} from 'rebass'
import {Link} from 'gatsby'
/**
 * Application components
 */
import Layout from '../components/layout'

/**
 * Constants
 */
const DEFAULT_TITLE = 'Press'
const DEFAULT_DESCRIPTION =
  'We are fighting for a realistic coronavirus recovery plan that suspends rent and mortgages to keep us safely housed.'

/**
 * Press Template
 *
 * @param {string} title
 * @param {string} description
 * @param {string} content
 */
const PressTemplate = ({title, description, content, outlet, outletUrl, image, slug}) => (
  <Layout>
    <Helmet>
      <title>{title || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <html lang="en" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header style={{marginTop: '1rem'}}>
            <h1 style={{lineBreak: 'word', marginBottom: '2rem'}}>{title}</h1>
            {image && (
              <Link to={slug}>
                <img src={image} style={{width: '100%'}} round={5} />
              </Link>
            )}
            <h2 style={{marginTop: '2rem'}}>
              via <a href={outletUrl}>{outlet}</a>
            </h2>
          </header>
          <Box px={2}>
            <Text color={'white'} dangerouslySetInnerHTML={{__html: content || description}} />
          </Box>
        </div>
      </section>
    </div>
  </Layout>
)

/**
 * Press Page
 *
 * @param {object} data
 */
const PressPage = ({pageContext: {data}}) => <PressTemplate {...data} slug={`press/${data.slug}`} />

export {PressTemplate}
export default PressPage
