import React, { Component } from "react";

class CompileButton extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
        <button onClick={handleChange} value={value}>Visualizar forms</button>
    )
  }
}

export default CompileButton