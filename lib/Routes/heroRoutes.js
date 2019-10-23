const { Router } = require('express');
const SuperHero = require('../models/SuperHeros');

module.exports = Router()

  .post('/', (req, res, next) => {

    const {
      name, 
      sound,
      image
    } = req.body;

    SuperHero 
      .create({ name, sound, image })
      .then(hero => res.send(hero))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    SuperHero
      .find()
      .then(heros => res.send(heros))
      .catch(next);
  });
