import React from 'react';
import { Link } from 'react-router-dom';
import NavToggleButton from './SideMenu/NavToggle';

const NavBar = props => (
  <nav >
    <div>
      <NavToggleButton click={props.menuClickHandler}/>
    </div>
    <div className="desktop-nav">
      <ul className="desktop-ul">
        <li className="desktop-li">
          <Link to="/">Home</Link>
        </li>
        <li className="desktop-li">
          <Link to="/project-list">Development</Link>
        </li>
        <li className="desktop-li">
          <Link to="/design-project-list">Design</Link>
        </li>
        <li className="desktop-li">
          <Link to="/about">About</Link>
        </li>
        <li className="desktop-li">
          <Link to="/archive">Archive</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
