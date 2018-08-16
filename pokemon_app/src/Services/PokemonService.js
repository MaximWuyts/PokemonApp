export const getAll = () => {
  return fetch("http://localhost:8000/pokemons/").then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
};

export const getOne = (id) => {
  return fetch("http://localhost:8000/pokemon/" + id).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  });
}

export const update = (id, pokemon) => {
  return fetch("http://localhost:8000/pokemon/" + id, {
    method: 'PUT',
    body: JSON.stringify(pokemon),
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  }).then((response) => {
    if (response.statusText === 'OK') {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
}

export const add = (pokemon) => {
  return fetch("http://localhost:8000/pokemon/add-pokemon", {
    method: 'POST',
    body: JSON.stringify(pokemon),
    mode: 'cors',
    headers: new Headers({
      'Content-Type': 'application/json',
    })
  }).then((response) => {
    if (response.statusText === 'OK') {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
}

export const del = (id) => {
  return fetch("http://localhost:8000/pokemon/" + id + "/delete", {
    method: 'DELETE',
  }).then((response) => {
    if (response.statusText === 'OK') {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
}