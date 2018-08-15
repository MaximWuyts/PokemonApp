import React from "react";
import { MainButton } from "../buttons/MainButton.Component";
import { Form } from "../forms/Form";
import { Link } from 'react-router-dom';
import header from "../../assets/header.png";
import * as PokemonService from "../../Services/PokemonService";

export class AddPokemon extends React.Component {

    onSubmit = (data) => {
        PokemonService.add(data).then(() => {
            this.props.history.push('/pokemons');
        });
    }


    render = () => {
        return (
            <div>

                <Link to="/"><img alt="header" className="header_img" src={header}></img></Link>
                <Form submit={this.onSubmit} function="add" />

            </div>
        );
    };
}
