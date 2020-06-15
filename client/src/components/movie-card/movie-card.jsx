import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './movie-card.scss';

// get bootstrap imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class MovieCard extends React.Component {
	render() {
		// This is given to the <MovieCard/> component by the outer world
		// which, in this case, is `MainView`, as `MainView` is what’s
		// connected to your database via the movies endpoint of your API
		const { movie, toMovieView } = this.props;

		return (
			<Col xs={true} sm={true} md={true} lg={true} xl={2}>
				<Card onClick={() => toMovieView(movie)}>
					<div className="overlay" />
					<Card.Img variant="top" src={movie.ImagePath} />
					<Card.Body onClick={() => toMovieView(movie)}>
						<Card.Title>{movie.Title}</Card.Title>
						{/*<Card.Text>{movie.Description}</Card.Text>*/}
					</Card.Body>
				</Card>
			</Col>
		);
	}
}

/* static propTypes on MovieCard set to object 
that contains special values provided as utilities by prop-types module.
This values help specify how MovieCard's props should look*/
MovieCard.propTypes = {
	movie: PropTypes.shape({
		Title: PropTypes.string,
		ImagePath: PropTypes.string,
	}).isRequired,
};
