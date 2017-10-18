const express = require('express');
const router = express.Router();
const Char = require('../models/char');

// get characters list from the db
router.get('/chars', function (req, res, next) {
  Char.geoNear(
      { type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)] },
      { maxDistance: 100000, spherical: true }
    ).then(function (chars) {
    res.send(chars);
  });

});

// add a new character list to the db
router.post('/chars', function (req, res, next) {
  Char.create(req.body).then(function (char) {
    res.send(char);
  }).catch(next);

});

// update a character in the db
router.put('/chars/:id', function (req, res, next) {
  Char.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
    Char.findOne({_id: req.params.id}).then(function (char) {
      res.send(char);
    });
  });
});

// delete a characters from the db
router.delete('/chars/:id', function (req, res, next) {
  Char.findByIdAndRemove({_id: req.params.id}).then(function (char) {
    res.send(char);
  });
});

module.exports = router;
