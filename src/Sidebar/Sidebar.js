import React from 'react';
import ExpandedPanel from './ExpandedPanel';
import CollapsedPanel from './CollapsedPanel';
import "./Sidebar.css";

const panelInfo = [
  {
    title: "Followed Channels",
    icon: 'https://via.placeholder.com/20x20',
    items: [
      {
        name: "tim",
        icon: 'https://via.placeholder.com/30x30',
      }, 
      {
        name: "sypher",
        icon: 'https://via.placeholder.com/30x30',
      }, 
      {
        name: "lupo",
        icon: 'https://via.placeholder.com/30x30',
      }]
  },
  {
    title: "Recommended Channels",
    icon: 'https://via.placeholder.com/20x20',
    items: [
      {
        name: "myth",
        icon: 'https://via.placeholder.com/30x30',
      }, 
      {
        name: "dakotaz",
        icon: 'https://via.placeholder.com/30x30',
      }, 
      {
        name: "Thomas",
        icon: 'https://via.placeholder.com/30x30',
      }]
  },
  {
    title: "Online Friends",
    icon: 'https://via.placeholder.com/20x20',
    items: [
      {
        name: "sseds",
        icon: 'https://via.placeholder.com/30x30',
      }]
}];

const Sidebar = ({ expanded }) => {
  const panels = panelInfo.map(panel => {
    return expanded ?
      <ExpandedPanel key={panel.title} panel={panel} /> :
      <CollapsedPanel key={panel.title} panel={panel} />;
  });
  return (
    <span className="sidebar">{panels}</span>
  )
}

export default Sidebar;