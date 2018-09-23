import React from 'react';
import ExpandedPanel from './ExpandedPanel';
import CollapsedPanel from './CollapsedPanel';
import "./Sidebar.css";

const panelInfo = [
  {
    title: "Followed Channels",
    icon: '',
    items: [{name: "tim"}, {name:"sypher"}, {name:"lupo"}],
  },
  {
    title: "Recommended Channels",
    icon: '',
    items: [{name: "myth"}, {name:"dakotaz"}, {name:"Thomas"}],
  },
  {
    title: "Online Friends",
    icon: '',
    items: [{name: "sseds"}],
}];

const Sidebar = ({ expanded }) => {
  const panels = panelInfo.map(panel => {
    return expanded ?
      <ExpandedPanel panel={panel} /> :
      <CollapsedPanel panel={panel} />;
  });
  return (
    <div className="sidebar">{panels}</div>
  )
}

export default Sidebar;