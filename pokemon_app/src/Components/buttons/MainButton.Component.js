import React from 'react';
import { Link } from 'react-router-dom';

export class MainButton extends React.Component {
    render = () => {
        return (
            <button className="home_btn" >
                <span>
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
                </span>
            </button>
        )
    }
}