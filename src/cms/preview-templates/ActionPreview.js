import React from 'react'
import {ActionTemplate} from '../../templates/action'

/**
 * Action Preview
 *
 * @param {object} entry
 */
const ActionPreview = ({entry}) => {
  const data = entry.getIn(['data']).toJS()

  return data ? (
    <ActionTemplate
      title={data.title}
      description={data.description}
      actionId={data.actionId}
      action={data.action}
    />
  ) : (
    <div>Loading...</div>
  )
}

export default ActionPreview
