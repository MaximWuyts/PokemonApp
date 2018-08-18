import React from 'react';
import { Link } from 'react-router-dom';

export class FifthButton extends React.Component {
    render = () => {
        return (
            <button className="fifth_btn" >
                <span>
                    <Link to={this.props.url}>
                        {this.props.name}
                    </Link>
                </span>
            </button>
        )
    }
}