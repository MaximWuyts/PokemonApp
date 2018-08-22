import React from "react";
import * as PokemonService from "../../Services/PokemonService";
import { Link } from 'react-router-dom';
import { ThirdButton } from '../buttons/ThirdButton.Component';
import { FourthButton } from '../buttons/FourthButton.Component';
import header from "../../assets/header.png";
import bulba from '../../assets/bulb.png';


export class PokemonDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: "",
            name: "",
            height: "",
            weight: "",
        }
    }

    componentWillMount = () => {
        PokemonService.getOne("5b7d6a3738f2dd85f8b9a646").then(response => this.setState({
            name: response.message.name,
            height: response.message.height,
            weight: response.message.weight,

        }),
        )
    }

    deletePokemon = () => {
        PokemonService.del("5b7d6a3738f2dd85f8b9a646").then(() => {
            this.props.history.push("/");
        });
    }


    render = () => {
        return (
            <div>
                <Link to="/"><img alt="header" className="header_img" src={header}></img></Link>
                <img alt="bulbasaur" className="bulb_img2" src={bulba}></img>

                <div className="pokemon_details">

                    <h1>Name: {this.state.name}</h1>
                    <h1>Height: {this.state.height}</h1>
                    <h1>Weight: {this.state.weight}</h1>
                </div>
                <div>
                    <ThirdButton url={"/pokemon/edit/" + this.state.name} name="Edit" />
                </div>
                <div>
                    <form onSubmit={this.deletePokemon}>
                        <button className='fourth_button' type="submit">Delete</button>
                    </form>

                </div>

            </div>
        );
    };
}
