import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './Sidebar.css';

const ExpandedPanel = ({ panel }) => {
  const items = panel.items.map(item => {
    return (<Link key={item.name} to={`/${item.name}`}>
      <img src={item.icon}></img>
    </Link>)
  });
  return (
    <div>
      <div className='icon-parent'>
        <div className='icon'><img src={panel.icon}></img></div>
      </div>
      {items}
    </div>
  )
}

export default ExpandedPanel;