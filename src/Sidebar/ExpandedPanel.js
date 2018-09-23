import React from 'react';

const ExpandedPanel = ({ panel }) => {
  const items = panel.items.map(item => <div key={item.name}>{item.name}</div>);
  // icon, name, subtext(game OR # new videos), offline/live w viewers
  return (
    <div>
      <div>{panel.title}</div>
      {items}
    </div>
  )
}

export default ExpandedPanel;