import React from 'react';
import { Link } from 'react-router-dom';
import NavToggleButton from './SideMenu/NavToggle';
import ThemeToggleButton from './ThemeToggleButton';

const NavBar = props => (
  <nav > 
    <div>
      <NavToggleButton click={props.menuClickHandler}/>
    </div>
    <div className="desktop-nav">
      <ul className="desktop-ul">
        <Link to="/"><img src={require('../imgs/logo.png')} alt="ML logo" width="50" height="50" align="left" className="logo"/></Link>
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
        <li className="desktop-li">
         <ThemeToggleButton/>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
