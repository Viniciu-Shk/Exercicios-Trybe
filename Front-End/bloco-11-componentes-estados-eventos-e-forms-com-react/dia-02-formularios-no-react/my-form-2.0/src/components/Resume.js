import React, { Component } from "react";

class Resume extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="resume">
        Resume
        <input 
          type={'textArea'}
          maxLength='40'
          name="resume"
          placeholder="Digite aqui um resumo do seu CV"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Resume