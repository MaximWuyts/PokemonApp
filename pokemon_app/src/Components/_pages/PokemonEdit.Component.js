import React from 'react';
import { Form } from '../forms/Form';
import * as PokemonService from '../../Services/PokemonService';
import header from "../../assets/header.png";
import { Link } from 'react-router-dom';

export class PokemonEdit extends React.Component {
    onSubmit = (data) => {
        console.log('from edit page ' + JSON.stringify(data));
        PokemonService.update("5b7afee363a5a81842cb568a", data).then(() => {
            this.props.history.push("/pokemon-overview/");
        })
    }

    render = () => {
        return (
            <div>
                <Link to="/"><img alt="header" className="header_img" src={header}></img></Link>
                <Form submit={this.onSubmit} name={this.props.match.params.name} image={this.props.image} />
            </div>
        )
    }
}