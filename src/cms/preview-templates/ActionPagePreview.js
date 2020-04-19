import React from 'react'
import ActionPage from '../../pages/action'

/**
 * Action Preview
 *
 * @param {object} entry
 */
const ActionPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  return data
    ? <ActionPage
        heading={data.heading}
        subheading={data.subheading}
        script={data.script}
        embed={data.embed}
      />
    : <div>Loading...</div>
}

export default ActionPagePreview
