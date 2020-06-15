import React from 'react';
import axios from 'axios';

import './main-view.scss';

// get app imports
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { NavBar } from '../navbar/navbar';

// get bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';

export class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null,
      user: null, // default is logged out
      registration: null,
    };
  }

  // One of the "hooks" available in a React Component
  componentDidMount() {
    axios
      .get('https://xbilyz3-myflix.herokuapp.com/movies')
      .then((response) => {
        // Assign the result to the state
        this.setState({
          movies: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie,
    });
  }

  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  onRegistration() {
    this.setState({
      registration: true,
    });
  }

  backtoSignIn() {
    this.setState({
      registration: false,
    });
  }

  render() {
    // If the state isn't initialized, this will throw on runtime
    // before the data is initially loaded
    const { movies, selectedMovie, user, registration } = this.state;

    if (!user && !registration)
      return (
        <div>
          <NavBar />
          <LoginView
            clickSignIn={(user) => this.onLoggedIn(user)}
            clickSignUp={() => this.onRegistration()}
          />
        </div>
      );

    if (registration)
      return (
        <div>
          <NavBar />
          <RegistrationView clickSignIn={() => this.backtoSignIn()} />
        </div>
      );

    // Before the movies have been loaded
    if (!movies) return <div className="main-view"></div>;

    return (
      <div className="main-view">
        <NavBar />
        <Container fluid>
          <Row className="justify-content-center">
            {selectedMovie ? (
              <MovieView
                movie={selectedMovie}
                toMovieCard={(movie) => this.onMovieClick(null)}
              />
            ) : (
              movies.map((movie) => (
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  toMovieView={(movie) => this.onMovieClick(movie)}
                />
              ))
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
