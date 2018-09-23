import React from 'react';

const CollapsedPanel = ({ panel }) => {
  const items = panel.items.map(item => <div key={item.name}>{item.name}</div>);
  return (
    <div>
      <div>{panel.title}</div>
      {items}
    </div>
  )
}

export default CollapsedPanel;