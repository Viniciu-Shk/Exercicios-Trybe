import React, { Component } from "react";

class JobDescription extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="jobDescription">
        JobDescription
        <input 
          type={'text'}
          maxLength='200'
          name="jobDescription"
          placeholder="Digite aqui seu endereço"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default JobDescription