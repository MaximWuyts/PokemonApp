import React from 'react';
import { Link } from 'react-router-dom';

export class ThirdButton extends React.Component {
    render = () => {
        return (
            <button className="third_button" >
                <span>
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
                </span>
            </button>
        )
    }
}