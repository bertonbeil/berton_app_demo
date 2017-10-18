const express = require('express');
const bodyParser = require('body-parser');

// set up express app
const app = express();

app.use(bodyParser.json());

// initialise routes
app.use('/api', require('./routes/api'));

// listen for request
app.listen(process.env.port || 4000, function () {
  console.log('TA-DA!!!');
});
