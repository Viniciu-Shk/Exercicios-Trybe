import React, { Component } from "react";

class Housetype extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="type">
        Type
        <input 
          type={'radio'}
          name="type"
          value="Casa"
          onChange={handleChange}
          checked={value.typeHouse}>
        </input>
        Casa
        <input 
          type={'radio'}
          name="type"
          value="Apartamento"
          onChange={handleChange}
          checked={value.typeBuilding}>
        </input>
        Apartamento
      </label>
    )
  }
}

export default Housetype