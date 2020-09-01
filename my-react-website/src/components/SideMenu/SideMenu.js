import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = props => {
  let menuClasses = 'side-menu';
  if (props.show) {
    menuClasses = 'side-menu open';
  }
  return (
  <nav className={menuClasses}>
    <div>
      <ul className="mobile-ul">
        <li className="mobile-li">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project-list">Development</Link>
        </li>
        <li>
          <Link to="/design-project-list">Design</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </div>
  </nav>
);
};

export default SideMenu;
