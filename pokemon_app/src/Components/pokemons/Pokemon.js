import React from 'react';
import { Link } from 'react-router-dom';
import * as PokemonService from '../../Services/PokemonService';
import bulba from "../../assets/bulb.png";
import charma from "../../assets/charm.png";

export class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /*componentWillMount = () => {
        PokemonService.getOne("5b741950aab0792164c34489").then(response => this.setState({
            image: response.message.sprites.front_default,
        }),
        )
    }
*/
    render = () => {
        return (
            <div className="pokemon_overview_page">

                <Link to={"/pokemon/" + this.props.name}><img alt="bulbasaur" className="bulb_img" src={bulba}></img></Link>
                <Link to={"/pokemon/" + this.props.name}><img alt="charmander" className="charm_img" src={charma}></img></Link>
            </div>
        )
    }
}