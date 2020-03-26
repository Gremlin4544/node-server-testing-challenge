const express = require('express');

const Cities = require('../cities/cities-models.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({message: "Qui Gon - its working! Its working"});
});

server.get('/cities', (req, res) => {
  Cities.getAll()
  .then(cities => {
    res.status(200).json(cities);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = server;