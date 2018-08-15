const pokemonData = require("./pokemonData");
const pokemon_routes = require("./pokemon_routes");

module.exports = function(app, db) {
  pokemon_routes(app, db);
  pokemonData();
};
