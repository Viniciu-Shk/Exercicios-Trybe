import React, { Component } from "react";

class Job extends Component {
  render() {
    const { handleChange, value } = this.props;
    return(
      <label htmlFor="job">
        Job
        <input 
          type={'text'}
          maxLength='200'
          name="job"
          placeholder="Digite aqui seu endereço"
          onChange={handleChange}
          value={value}>
        </input>
      </label>
    )
  }
}

export default Job