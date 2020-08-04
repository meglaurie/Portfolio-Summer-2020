import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/project-list">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/archive">Archive</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
