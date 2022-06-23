import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
        <EstadoFavorito handleChange={ this.handleChange } value={this.state.estadoFavorito}/>
          <fieldset>
            <input
              type="number"
              name="idade"
              onChange={this.handleChange}
            />
            <input
              type="checkbox"
              name="vaiComparecer"
              onChange={this.handleChange}
            />
            <input
              type="file"
              name="vaiComparecer"
              onChange={this.handleChange}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;