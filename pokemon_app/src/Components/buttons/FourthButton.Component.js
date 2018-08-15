import React from 'react';
import { Link } from 'react-router-dom';

export class FourthButton extends React.Component {
    render = () => {
        return (
            <button className="fourth_button" >
                <span>
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
                </span>
            </button>
        )
    }
}