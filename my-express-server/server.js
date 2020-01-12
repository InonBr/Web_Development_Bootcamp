const express = require('express');
const app = express();
const port = 3000

// home page
app.get("/", (req, res) => res.send('<h1>Hello World!</h1>'));

// contact page
app.get('/contact', (req, res) => {
  res.send('<h1>Hello contact!</h1>');
});

// about page
app.get('/about', (req, res) => {
  res.send('<h1>Hello my name is Inon and I am a fullstack developer!</h1>');
});

// run on lockalhost 3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
