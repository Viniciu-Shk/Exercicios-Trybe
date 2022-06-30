import React, { Component } from "react";

class Email extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="email">
        Email
        <input 
          type={'email'}
          maxLength='50'
          name="email"
          placeholder="Digite aqui seu email"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Email