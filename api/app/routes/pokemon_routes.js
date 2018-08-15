const https = require("https");
const apiurl = "https://pokeapi.co/api/v2/pokemon/2";
const axios = require("axios");
const ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {
  app.get('/update/api', (req, res) => {
    for (var i = 0; i < 2; i++) {
      db.collection("Pokemons").remove();
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(response => {
        db.collection('Pokemons').insert(response.data, (err, results) => {
          if (err) {
            res.send({
              status: "ERROR",
              message: "Could not update data from public api: " + ("https://pokeapi.co/api/v2/pokemon/" + i)
            })
          } else {
            sended = true;
            res.send({
              status: "OK",
              message: results
            })
          }
        })
      })
        .catch(error => {
          res.send(error);
        });
    }
  }
  )

  app.get('/pokemons/', (req, res) => {
    db.collection('Pokemons').find({}).toArray((err, results) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "could not find any pokemons"
        })
      } else {
        res.send({
          status: "OK",
          message: results
        })
      }
    })
  })

  // get single pokemon from db based on id
  app.get('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const details = { "_id": new ObjectID(id) };
    db.collection('Pokemons').findOne(details, (err, item) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "could not find the pokemon with id: " + id
        })
      } else {
        res.send({
          status: "OK",
          message: item
        })
      }
    })
  })

  // post single pokemon into db
  app.post('/pokemons/add', (req, res) => {
    let pokemon = req.body;
    db.collection('Pokemons').insert(pokemon, (err, results) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "Could not update data from public api: " + apiurl
        })
      } else {
        res.send({
          status: "OK",
          message: results
        })
      }
    })
  })

  // update single pokemon from db based on id
  app.put('/pokemon/:id', (req, res) => {
    const id = req.params.id;
    const details = { "_id": new ObjectID(id) };
    const pokemon = req.body;
    db.collection('Pokemons').update(details, pokemon, (err, item) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "could not update the pokemon with id: " + id
        })
      } else {
        res.send({
          status: "OK",
          message: item
        })
      }
    })
  })

  // delete single pokemon from db based on id
  app.delete('/pokemon/:id/delete', (req, res) => {
    const id = req.params.id;
    const details = { "_id": new ObjectID(id) };
    db.collection('Pokemons').remove(details, (err, item) => {
      if (err) {
        res.send({
          status: "ERROR",
          message: "could not delete the pokemon with id: " + id
        })
      } else {
        res.send({
          status: "OK",
          message: 'pokemon ' + id + ' is removed!'
        });
      }
    })
  })
};
