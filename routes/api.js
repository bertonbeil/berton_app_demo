const express = require('express');
const router = express.Router();

// get characters list from the db
router.get('/chars', function (req, res) {
  res.send({ type: 'GET' });
});

// add a new character list to the db
router.post('/chars', function (req, res) {
  console.log(req.body);
  res.send({ type: 'POST' });
});

// update a character in the db
router.put('/chars/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

// delete a characters from the db
router.delete('/chars/:id', function (req, res) {
  res.send({ type: 'DELETE' });
});

module.exports = router;
