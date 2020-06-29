import React from 'react'
import {ToolTemplate} from '../../templates/tool'

/**
 * Tool Preview
 *
 * @param {object} entry
 */
const ToolPreview = ({entry}) => {
  const {title, description, content} = entry.getIn(['data']).toJS()

  return title && description && content ? (
    <ToolTemplate title={title} description={description} content={content} />
  ) : (
    <div>Loading...</div>
  )
}

export default ToolPreview
