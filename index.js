const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
	uuid = require('uuid'),
  app = express();

  app.use(bodyParser.json());
  // Logging with Morgan
  app.use(morgan('common'));

// movies
let movies = [{
    title: 'The Shawshank Redemption'
  },
  {
    title: 'The Godfather'
  },
  {
    title: 'The Green Mile'
  },
]

let movieInfo = [{
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    genre: 'Drama',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL50_.jpg',
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    genre: ['Crime', 'Drama'],
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL50_SY1000_CR0,0,704,1000_AL_.jpg',
  },
  {
    title: 'The Green Mile',
    director: 'Frank Darabont',
    genre: ['Crime', 'Drama', 'Fantasy'],
    description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_QL50_.jpg',
  }
];

let genres = [{
    name: 'Drama',
    description: 'In film and television, drama is a genre of narrative fiction intended to be more serious than humorous in tone. Drama of this kind is usually qualified with additional terms that specify its particular subgenre, such as "police crime drama", "political drama", "legal drama", "historical drama", "domestic drama", "teen drama" or "comedy-drama".',
  },
  {
    name: 'Crime',
    description: 'Crime films, in the broadest sense, are a film genre inspired by and analogous to the crime fiction literary genre. Films of this genre generally involve various aspects of crime and its detection.',
  },
  {
    name: 'Fantasy',
    description: 'Fantasy films are films that belong to the fantasy genre with fantastic themes, usually magic, supernatural events, mythology, folklore, or exotic fantasy worlds. The genre is considered a form of speculative fiction alongside science fiction films and horror films, although the genres do overlap. Fantasy films often have an element of magic, myth, wonder, escapism, and the extraordinary',
  },
]

let director = [{
  name: 'Frank Darabont',
	born: 'January 28, 1959 in Montbéliard, Doubs, France',
	bio: 'Three-time Oscar nominee Frank Darabont was born in a refugee camp in 1959 in Montbeliard, France, the son of Hungarian parents who had fled Budapest during the failed 1956 Hungarian revolution. Brought to America as an infant, he settled with his family in Los Angeles and attended Hollywood High School. His first job in movies was as a production...',
},
{
  name: 'Francis Ford Coppola',
	born: 'April 7, 1939 in Detroit, Michigan, USA',
	bio: 'Francis Ford Coppola was born in 1939 in Detroit, Michigan, but grew up in a New York suburb in a creative, supportive Italian-American family. His father, Carmine Coppola, was a composer and musician. His mother, Italia Coppola (née Pennino), had been an actress. Francis Ford Coppola graduated with a degree in drama from Hofstra University, and ...',
},
]

let users = [
  {
    id: 1,
    username: 'Jessica Drake',
    password: '123',
		data_of_birt: '12.03.1987',
		email: 'test@test.com',
    favorite: '',
  },
  {
    id: 2,
    username: 'Ben Cohen',
		password: '1234',
		data_of_birt: '21.09.1981',
		email: '123@test.com',
    favorite: '',
  },
  {
    id: 3,
    username: 'Lisa Downing',
		password: '4321',
		data_of_birt: '09.06.1970',
		email: '4321@test.com',
    favorite: '',
  },
];

app.get('/', (req, res) => {
  res.send('<h1>' + '<b>Welcome to myFlix !<b>' + '</h1>');
});

// gets all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// gets single movie, by title
app.get('/movies/:title', (req, res) => {
  res.json(movieInfo.find((movie) => {
    return movie.title === req.params.title
  }));
});

// gets data about genre, by name
app.get('/movies/genres/:genre', (req, res) => {
  res.json(genres.find((genre) => {
    return genre.name === req.params.genre
  }));
});

// returns data about a director, by name
app.get('/movies/directors/:name', (req, res) => {
  res.json(director.find((movie) => {
    return movie.name === req.params.name
  }));
});

// Adds data for a new user to our user list.
app.post('/users', (req, res) => {
  let newUser = req.body;

  if (!newUser.username) {
    const message = 'Missing "name" in request body';
    res.status(400).send(message);
  } else {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).send(newUser);
  }
});

// Update the a user's information
 app.put("/users/:username", (req, res) => {
   res.send("User information updated.");
 });

// Deletes a User from our list by username
app.delete('/users/:username', (req, res) => {
  let user = users.find((user) => {
		return user.username === req.params.username });

  if (user) {
    user = users.filter((obj) => {
			return obj.username !== req.params.username });
    res.status(201).send('User: ' + req.params.username + ' removed succesfully.');
  }
});

// Allow users to add a movie to their list of favorites
app.post("/users/:username/favorites", (req, res) => {
   res.send("Add favorite movie to users favorite list.");
 });

 // Deletes a movie from a user's favorites list by username
  app.delete("/users/:username/favorites/:title", (req, res) => {
    res.send("Movie successfully deleted from favorites.");
  });

// Serving Static Files
app.use('/dev', express.static('public'));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
} else {
    console.log('Added to log.');
  }
  res.status(500).send('Something broke!');
});

// listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on  port 8080.');
});
