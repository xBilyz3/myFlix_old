import React from 'react';
import PropTypes from 'prop-types';

import './movie-view.scss';

// get bootstrap imports
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MovieView extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: null,
      selectedMovie: null,
    };
  }

  handleClick(movie) {
    console.log('this is:', this);
  }

  render() {
    const { movie, toMovieCard } = this.props;

    if (!movie) return null;

    return (
      <div className="movie-view">
        <Container>
          <Row>
            <Col>
              <img className="movie-poster" src={movie.ImagePath} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <div className="movie-view-header">
                <div className="movie-title">
                  <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-genre">
                  <span className="label">Genre: </span>
                  <span className="value">{movie.Genre.Name}</span>
                </div>
                <div className="movie-director">
                  <span className="label">Director: </span>
                  <span className="value">{movie.Director.Name}</span>
                </div>
              </div>
              <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
              </div>
              <Button
                className="back-button"
                variant="dark"
                onClick={() => toMovieCard(null)}>
                back
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string,
    Title: PropTypes.string,
    ImagePath: PropTypes.string,
    Description: PropTypes.string,
    Genre: PropTypes.shape({
      Name: PropTypes.string,
      Description: PropTypes.string,
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string,
      Bio: PropTypes.string,
      Birth: PropTypes.string,
      Death: PropTypes.string,
    }),
  }).isRequired,
};
