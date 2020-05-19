const express = require('express'),
	morgan =  require('morgan');
	const app = express();
	
// My top 10 movies
let topMovies = [
  {
    title: 'The Shawshank Redemption'
  },
  {
    title: 'The Godfather'
  },
  {
    title: 'Star Wars'
  },
  {
    title: 'The Lord of the Rings'
  },
  {
    title: 'The Matrix'
  },
  {
    title: 'The Green Mile'
  },
  {
    title: 'American History X'
  },
  {
    title: 'The Intouchables'
  },
  {
    title: 'Django Unchained'
  },
  {
    title: 'Schindler\'s List'
  }
];

// Logging with Morgan
app.use(morgan('common'));


app.get('/', (req, res) => {
  res.send('<h1>' + '<b>Welcome to myFlix !<b>' + '</h1>');
});

// belongs to topMovies
app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// Serving Static Files
app.use('/dev', express.static('public'));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on  port 8080.');
});
