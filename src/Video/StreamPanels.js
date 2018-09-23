import React from 'react';
import Panel from './Panel';

const StreamPanels = ({ panels }) => {
  const items = panels.map(panel => <Panel key={panel} panel={panel} />)
  return (
    <div>StreamPanels
      {items}
    </div>
  )
}

export default StreamPanels;