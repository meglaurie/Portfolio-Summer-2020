import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class NavBar extends Component{

  state = {
    active: true,
  }

  render(){
    return(
      <nav className={ this.state.active? "": "textGlow" }>
        <ul>
          <li>
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
          <li>
            <FontAwesomeIcon className="res-menu" icon={faBars} />
          </li>
        </ul>
      </nav>

    )
  }
}
