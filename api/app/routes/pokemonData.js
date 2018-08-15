const fetch = require('node-fetch')
const id = 2;

module.exports = function () {
  return fetch("https://pokeapi.co/api/v2/pokemon/").then((response) => {
    if (response.status === 200) {
      return response.json();
    }
    console.log(response);
    throw new Error('Network response was not ok.');
  })
}