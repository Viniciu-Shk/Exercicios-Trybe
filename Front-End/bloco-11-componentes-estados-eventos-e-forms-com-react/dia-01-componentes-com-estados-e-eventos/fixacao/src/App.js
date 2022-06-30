import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(param) {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior[param] + 1,
      numeroDeCliques2: estadoAnterior[param] + 1,
      numeroDeCliques3: estadoAnterior[param] + 1
    }))
  }

  render() {
    return (
      <>
        <button onClick={() => this.handleClick('numeroDeCliques1')}>{this.state.numeroDeCliques1}</button>
        <button onClick={() => this.handleClick('numeroDeCliques2')}>{this.state.numeroDeCliques2}</button>
        <button onClick={() => this.handleClick('numeroDeCliques3')}>{this.state.numeroDeCliques3}</button>
      </>
    )
  }
}

export default App;