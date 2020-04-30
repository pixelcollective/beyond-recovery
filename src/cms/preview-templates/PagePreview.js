import React from 'react'
import {PageTemplate} from '../../templates/page'

/**
 * Page Preview
 *
 * @param {object} entry
 */
const PagePreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return data ? (
    <PageTemplate
      title={data.title}
      description={data.description}
      content={data.content}
      image={data.image}
    />
  ) : (
    <div>Loading...</div>
  )
}

export default PagePreview
