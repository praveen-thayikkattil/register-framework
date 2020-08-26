import React, { Component } from "react";

class RegFormLabel extends Component {
  render() {
    return (
      <div className="control-label">
        <label name={this.props.name}>{this.props.title}</label>
      </div>
    );
  }
}

export default RegFormLabel;
