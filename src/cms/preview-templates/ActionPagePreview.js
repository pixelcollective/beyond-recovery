import React from 'react'
import ActionPage from '../../pages/action'

const ActionPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ActionPage
        image={getAsset(data.image)}
        name={data.name}
        embed={data.embed}
        body={data.body}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default ActionPagePreview
