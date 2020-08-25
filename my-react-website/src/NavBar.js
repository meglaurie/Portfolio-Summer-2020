import React from 'react';
import { Link } from 'react-router-dom';
import ToggleButton from './components/ToggleButton';


const NavBar = () => (
  <nav className="">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/project-list">Development</Link>
      </li>
      <li>
        <Link to="/designProject-list">Design</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
