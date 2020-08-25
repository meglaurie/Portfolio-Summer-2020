import React, { Component } from "react";

export default class ToggleButton extends Component{

  state = {
    active: true,
  }

  render() {
    return (
      <div>

        <div className="col-sm-4 col-sm-offset-4">
          <div
            className={ this.state.active ? "square switch-on" : "square switch-off" }
            onClick={() => this.setState({active: !this.state.active})}>
            { this.state.active ? 'Day' : 'Night' }
          </div>
        </div>
        <div className={ this.state.active? "bg-light light-on": "bg-light light-off" } >
          <h1 className="title-txt">Megan Laurie</h1>
          <h2 className="sub-title">Front-end Developer and Designer</h2>
        </div>
      </div>
    );
  }
}
