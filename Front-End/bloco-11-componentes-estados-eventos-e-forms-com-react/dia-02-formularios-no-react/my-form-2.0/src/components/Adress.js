import React, { Component } from "react";

class Adress extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="adress">
        Adress
        <input 
          type={'text'}
          maxLength='200'
          name="adress"
          placeholder="Digite aqui seu endereço"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Adress