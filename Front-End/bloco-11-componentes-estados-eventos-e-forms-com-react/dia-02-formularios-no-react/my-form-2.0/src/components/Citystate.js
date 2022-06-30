import React, { Component } from "react";

class Citystate extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="state">
        State
        <input 
          type={'text'}
          max='200'
          name="state"
          placeholder="Digite aqui seu estado"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Citystate