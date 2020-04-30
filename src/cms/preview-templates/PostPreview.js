import React from 'react'
import {PostTemplate} from '../../templates/post'

/**
 * Post Preview
 *
 * @param {object} entry
 */
const PostPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return data ? (
    <PostTemplate
      title={data.title}
      description={data.description}
      content={data.content}
      image={data.image}
    />
  ) : (
    <div>Loading...</div>
  )
}

export default PostPreview
