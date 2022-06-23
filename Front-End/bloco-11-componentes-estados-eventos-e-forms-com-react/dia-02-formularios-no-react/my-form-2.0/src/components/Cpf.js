import React, { Component } from "react";

class Cpf extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="cpf">
        CPF
        <input 
          type={'text'}
          maxLength='11'
          name="cpf"
          placeholder="Digite aqui seu CPF"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Cpf