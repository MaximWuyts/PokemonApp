import React from 'react';
import { Link } from 'react-router-dom';

export class SecondaryButton extends React.Component {
    render = () => {
        return (
            <button className="secondary_button" >
                <span>
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
                </span>
            </button>
        )
    }
}