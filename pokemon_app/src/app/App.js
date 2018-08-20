import React, { Component } from "react";

import { Route } from "react-router-dom";
import { PokemonOverview } from "../Components/_pages/PokemonOverview.Component";
import { HomePage } from '../Components/_pages/HomePage.Component';
import { AddPokemon } from '../Components/_pages/AddPokemon.Component';
import { PokemonDetails } from "../Components/_pages/PokemonDetails.Component";
import { PokemonEdit } from "../Components/_pages/PokemonEdit.Component";
import { Loading } from "../Components/_pages/Loading.Component";


class App extends Component {
  render() {
    return (
      <div id="wrapper" className="test">

        <Route exact path="/" component={HomePage} />
        <Route exact path="/pokemon" component={PokemonOverview} />
        <Route exact path="/pokemon-overview" component={PokemonOverview} />
        <Route exact path="/add-pokemon" component={AddPokemon} />
        <Route exact path="/pokemon/:name" component={PokemonDetails} />
        <Route exact path="/pokemon/edit/:name" component={PokemonEdit} />
        <Route exact path="/pokemon/add" component={AddPokemon} />

        <Route exact path="/loading" component={Loading} />

      </div>
    );
  }
}

export default App;
