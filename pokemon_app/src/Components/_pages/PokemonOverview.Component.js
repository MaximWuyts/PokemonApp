import React from "react";
import * as PokemonService from "../../Services/PokemonService";
import { Pokemon } from "../pokemons/Pokemon";

import { SecondaryButton } from "../buttons/SecondaryButton.Component";
import { ThirdButton } from '../buttons/ThirdButton.Component';
import header from "../../assets/header.png";
import { Link } from 'react-router-dom';

export class PokemonOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  componentWillMount = () => {
    PokemonService.getAll().then(response =>
      this.setState({ pokemons: response.message })
    );
  };

  renderPokemons = () => {
    return this.state.pokemons.map((pokemon, i) => <Pokemon key={i} name={pokemon.name} />);
  };

  render = () => {
    return (
      <div>
        <Link to="/"><img alt="header" className="header_img" src={header}></img></Link>
        <ThirdButton url="/add-pokemon" name="Catch A Pokemon" />
        {this.renderPokemons()}

      </div>
    );
  };
}
