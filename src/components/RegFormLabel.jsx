import React, { Component } from "react";

class RegFormLabel extends Component {
  render() {
    return (
      <div className="control-label">
        <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
      </div>
    );
  }
}

export default RegFormLabel;
