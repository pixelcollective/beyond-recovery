import React from 'react'
import ActionPage from '../../pages/action'

/**
 * Action Preview
 *
 * @param {object}   entry
 * @param {function} getAsset
 */
const ActionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  return data
    ? <ActionPage
        image={getAsset(data.image)}
        name={data.name}
        embed={data.embed}
        body={data.body}
      />
    : <div>Loading...</div>
}

export default ActionPagePreview
