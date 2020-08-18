import React, { Component } from "react";

export default class ToggleButton extends Component{
  state = {
    darkmode: false,
  }

  toggle = () => {
    document.body.classList.add('darkmode');
    // this.setState({ darkmode: true });
  }

  render(){
    return(
      <div>
        {
          document.body.classList.remove('darkmode')
          // this.setState( darkmode: false )
        }
        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    )
  }
}
