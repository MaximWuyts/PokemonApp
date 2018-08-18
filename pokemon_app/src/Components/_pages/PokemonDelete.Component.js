import React from 'react';
import * as PokemonService from '../../Services/PokemonService';

export class PokemonDelete extends React.Component {

    deletePokemon = () => {
        PokemonService.del("5b768ca0eda8ce321d8343f1").then(() => {
            this.this.props.history.push("/pokemon-overview/");
        });
    }



    render = () => {
        return (
            <div>
                <h1>Are you sure to delete {this.state.name}</h1>
                <button onClick={this.deletePokemon} name="Delete" >delete</button>

            </div>
        )
    }
}