// all pacages
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// use bodyParser
app.use(bodyParser.urlencoded({ extended: true }))

// home page calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
  let num1 = parseInt(req.body.num1);
  let num2 = parseInt(req.body.num2);
  let result = num1 + num2;

  res.send("The sum is: " + result);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
