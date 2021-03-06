import React from 'react';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavToggleButton = props => (
  <button className="burger-btn">

      <FontAwesomeIcon onClick={props.click} className="res-menu" icon={faBars} />

  </button>
 
);

export default NavToggleButton;
