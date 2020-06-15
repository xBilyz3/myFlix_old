import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './login-view.scss';

// get bootstrap imports
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send a request to the server for authentication then call props.onLoggedIn(username)
    props.clickSignIn(username);
  };

  return (
    <Form className="login-view">
      <Form.Row className="justify-content-center">
        <Col className="form" xs={10} sm={8} lg={4}>
          <Jumbotron>
            <h1>Hello.</h1>
            <h2>Welcome back</h2>
          </Jumbotron>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              size="lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </Form.Group>
          <Button
            className="sign-in-button mt-5"
            size="lg"
            type="button"
            onClick={handleSubmit}
            block>
            Sign In
          </Button>

          <div className="sign-up">
            <div className="sign-up-text">New to myFlix?</div>
            <Button
              className="sign-up-button"
              variant="link"
              onClick={() => props.clickSignUp()}>
              Sign Up
            </Button>
            .
          </div>
        </Col>
      </Form.Row>
    </Form>
  );
}

LoginView.propTypes = {
  clickSignIn: PropTypes.func.isRequired,
};
