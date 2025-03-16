const express = require('express');
const app = express();
const port = 8000;

const path = require('path');

// Middleware to parse form data from POST requests
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home'); 
});

app.get('/one', (req, res) => {
  res.render('one'); 
});

app.get('/two', (req, res) => {
  res.render('two'); 
});

app.get('/three', (req, res) => {
  res.render('three'); 
});

app.get('/code', (req, res) => {
  res.render('code'); 
});

// Handle POST request for /codesolve to process the form input
app.post('/codesolve', (req, res) => {
  const input = req.body.code; // Get the input from the form

  // Check the input value and render the appropriate view
  if (input === "FISH" || input === "fish" || input === "Fish") {
    res.render('celebration'); // Render 'celebration' if input is correct
  } else {
    res.render('celebration', { message: "Try again! Hint: It's a four-digit code." }); // Render 'one-actual' if input is incorrect
  }
});

app.post('/onesolve', (req, res) => {
  const input = req.body.code; // Get the input from the form

  // Check the input value and render the appropriate view
  if (input === "POTATO" || input === "potato" || input === "Potato") {
    res.render('onehalf'); // Render 'celebration' if input is correct
  } else {
    res.render('one', { message: "Try again! Hint: It's a four-digit code." });
  }
});

app.get('/celebration', (req, res) => {
  res.render('celebration'); 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
