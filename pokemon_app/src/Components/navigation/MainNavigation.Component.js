import React from "react";
import { Link } from 'react-router-dom';

export class MainNavigation extends React.Component {
  render = () => {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/pokemon-overwiew">Pokemons</Link></li>
        </ul>
      </div>
    );
  };
}
