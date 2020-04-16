import React from 'react'
import ActionPage from '../../pages/action'

/**
 * Action Preview
 *
 * @param {object}   entry
 */
const ActionPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return data
    ? <ActionPage
        heading={data.heading}
        subheading={data.subheading}
        embed={data.embed}
        before={data.before}
        scripts={data.scripts}
        body={data.body}
      />
    : <div>Loading...</div>
}

export default ActionPagePreview
