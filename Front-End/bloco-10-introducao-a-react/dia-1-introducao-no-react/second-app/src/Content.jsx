import React, { Component } from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const task = ({conteudo, bloco, status}, index) => {
  return (
    <span key={`content: ${index}`} className="item-list">{
      `o conteúdo é: ${conteudo},
      Status: ${status},
      Bloco: ${bloco}`}</span>
    )
}

class Content extends Component {
  render () {
    return (
      <div className="container">
        { conteudos.map((objeto, index) => task(objeto, index))}
      </div>
    )
  }
}

export default Content;