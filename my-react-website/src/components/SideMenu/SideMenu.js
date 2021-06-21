import React from 'react';
import { Link } from 'react-router-dom';
// import ProjectsPage from '../../pages/ProjectsPage';
import ThemeToggleButton from '../ThemeToggleButton';

const SideMenu = props => {
  let menuClasses = 'side-menu';
  if (props.show) {
    menuClasses = 'side-menu open';
  } 

  return (
  <nav className={menuClasses}>
    <div className="mobileNavli">
      <Link to="/"><img src={require('../../imgs/logo.png')} alt="ML logo" width="50" height="50" align="left" className="logo"/></Link>
      <ul className="mobile-ul">
        <li className="mobile-li">
          <Link to="/" onClick={props.click}>Home</Link>
        </li>
        <li className="mobile-li">
          <Link to="/project-list" onClick={props.click}>Work</Link>
        </li>
      
        <li className="mobile-li">
          <Link to="/about" onClick={props.click} >About</Link>
        </li>
        <li className="mobile-li">
          <Link to="/archive" onClick={props.click}>Archive</Link>
        </li>
        <li className="mobile-li">
          <ThemeToggleButton/>
        </li>
      </ul>
    </div>
  </nav>
);
};

export default SideMenu;
