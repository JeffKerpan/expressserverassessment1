'use strict';

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/pets', function (req, res, next) {
  // gets ALL the pets
  res.send('Here are all the pets');
});

app.get('/pets/:id', function (req, res, next) {
  // USE req.params.id to get the id the user went to
  // gets a pet at a specific id
  // ex: localhost:8000/pets/4
});

app.post('/pets/:id', function (req, res, next) {
  // USE req.body {}
  // body-parser working here to not post an empty object
});

app.patch('/pets/:id', function (req, res, next) {
  // USE req.params.id
});

app.delete('/pets/:id', function (req, res, next) {
  // USE req.params.id
});

app.use(function (req, res, next) {
  // Send STATUS 404 if NOT FOUND
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  // Send STATUS 500 if SERVER ERROR
  res.sendStatus(500);
});

app.listen(port, function() {
  console.log('Listening on port:', port);
});

module.exports = app;
