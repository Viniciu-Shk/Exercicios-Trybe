import React, { Component } from "react";

class Name extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="name">
        Name
        <input 
          type={'text'}
          maxLength='40'
          name="name"
          placeholder="Digite aqui seu nome"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Name