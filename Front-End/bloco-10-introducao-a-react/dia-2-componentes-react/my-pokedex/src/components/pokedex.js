import React from "react";
import Pokemon from "./pokemon";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props
    return (
      pokemons.map((pokemon) => <Pokemon pokemon={ pokemon } key={ pokemon.id }/>)
    )
  }
}

export default Pokedex;