import React from 'react';
import PropTypes from 'prop-types';

import './navbar.scss';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export class NavBar extends React.Component {
	render() {
		// This is given to the <MovieCard/> component by the outer world
		// which, in this case, is `MainView`, as `MainView` is what’s
		// connected to your database via the movies endpoint of your API
		const { movie, toMovieView } = this.props;

		return (
			<Navbar>
				<Navbar.Brand href="#">myFlix</Navbar.Brand>
			</Navbar>
		);
	}
}
