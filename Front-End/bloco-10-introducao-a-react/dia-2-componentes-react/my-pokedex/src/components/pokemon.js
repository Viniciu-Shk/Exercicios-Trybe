import React from "react";


class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
    return (
      <div className="pokeCard">
      <ul>
        <li>{ name }</li>
        <li>{ type }</li>
        <li>Average Wheight: { value } { measurementUnit }</li>
        <img src={image} alt={name}></img>
      </ul>
      </div>
    )
  }
}

export default Pokemon;