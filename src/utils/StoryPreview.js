import React from 'react'

const StoryPreview = props => {
  return (
    <div
      style={{ padding: '40px', backgroundColor: props.dark ? '#e4e5e6' : '#ffffff', ...props.additional }}>
      {props.children}
    </div>
  )
}

export default StoryPreview
