import React from 'react'
import Post from '../../templates/post'

/**
 * Post Preview
 *
 * @param {object} entry
 */
const PostPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return data ? (
    <Post
      title={data.title}
      description={data.description}
      content={data.content}
    />
  ) : <div>Loading...</div>
}

export default PostPreview
