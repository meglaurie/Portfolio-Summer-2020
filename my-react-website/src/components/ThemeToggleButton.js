import React, { Component } from "react";
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ThemeToggleButton extends Component{

  state = {
    active: true,
  }

  render() {
    return (
      <main className="">

        <section className={ this.state.active? "bg-light light-on": "bg-light light-off" } >
          <h1 className={ this.state.active? "title-txt page-title": "title-txt page-title textGlow" }>Megan Laurie</h1>
          <h2 className={ this.state.active? "sub-title": "sub-title textGlow" }>Front-end Developer and Designer</h2>
          <div className="center-align">
            <button
              className={ this.state.active ? "square switch-on" : "square switch-off" }
              onClick={() => this.setState({active: !this.state.active})}>
              { this.state.active ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} /> }
            </button>
          </div>
        </section>

      </main>

    );
  }
}
