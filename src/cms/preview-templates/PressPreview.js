import React from 'react'
import {PostTemplate} from '../../templates/post'

/**
 * Post Preview
 *
 * @param {object} entry
 */
const PostPreview = ({entry}) => {
  const {title, description, content} = entry.getIn(['data']).toJS()

  return title && description && content ? (
    <PostTemplate title={title} description={description} content={content} />
  ) : (
    <div>Loading...</div>
  )
}

export default PostPreview
