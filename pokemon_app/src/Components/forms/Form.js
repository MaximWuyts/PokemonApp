import React from 'react';
import * as PokemonService from "../../Services/PokemonService";

export class Form extends React.Component {
    state = {
        name: "",
        height: "",
        weight: "",

    };

    componentWillMount = () => {
        PokemonService.getOne("5b7afee363a5a81842cb568a").then(response => this.setState({
            name: response.message.name,
            height: response.message.height,
            weight: response.message.weight,

        }),
        )
    }

    updateName = (e) => {
        let name = e.target.value;

        this.setState({
            name: name,
        });
    }

    updateHeight = (e) => {
        let height = e.target.value;

        this.setState({
            height: height,
        });
    }

    updateWeight = (e) => {
        let weight = e.target.value;

        this.setState({
            weight: weight,
        });
    }


    onSubmit = (e) => {
        e.preventDefault();

        var object = {
            name: this.state.name,
            height: this.state.height,
            weight: this.state.weight,

        }

        this.props.submit(object);
    }



    render() {
        return (
            <form onSubmit={this.onSubmit} class="form-style-4">

                <label for="field1">
                    <span>Name</span><input type="text" name="name" value={this.state.name}
                        onChange={this.updateName} />
                </label>
                <label for="field2">
                    <span>Height</span><input type="text" name="height" value={this.state.height}
                        onChange={this.updateHeight} />
                </label>
                <label for="field3">
                    <span>Weight</span><input type="text" name="weight" value={this.state.weight}
                        onChange={this.updateWeight} />
                </label>
                <label>
                    <span>&nbsp;</span><input type="submit" value="Save Pokemon" />
                </label>
            </form>

        );
    }
}