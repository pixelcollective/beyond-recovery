import React from 'react'
import {TrainingTemplate} from '../../templates/training'

/**
 * Training Preview
 *
 * @param {object} entry
 */
const TrainingPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return data ? (
    <TrainingTemplate
      title={data.title}
      description={data.description}
      youtubeId={data.youtubeId}
    />
  ) : (
    <div>Loading...</div>
  )
}

export default TrainingPreview
