import React, { Component } from "react";

class City extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="city">
        City
        <input 
          type={'text'}
          maxLength='28'
          name="city"
          placeholder="Digite aqui sua cidade"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default City