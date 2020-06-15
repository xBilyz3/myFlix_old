import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './registration-view.scss';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function RegistrationView(props) {
  const [username, createUsername] = useState('');
  const [password, createPassword] = useState('');
  const [email, createEmail] = useState('');
  const [birthday, createBirthday] = useState('');

  const handleSubmit = () => {
    console.log(username, password, email, birthday);
    /* Send a request to the server for authentication */
    /* then call props.onLoggedIn(username) */
    props.onLoggedIn(username);
  };

  return (
    <Form className="registration-view">
      <Form.Row className="justify-content-center">
        <Col className="form" xs={10} sm={8} lg={4}>
          <Jumbotron>
            <h1>Registration</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
          </Jumbotron>
          <Form.Group controlId="formBasicUsername">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => createUsername(e.target.value)}
            />
            <label>Username</label>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              size="lg"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => createPassword(e.target.value)}
            />
            <label>Password</label>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control
              size="lg"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => createEmail(e.target.value)}
            />
            <label>Email</label>
          </Form.Group>

          <Form.Group controlId="formBasicBirthday">
            <Form.Control
              size="lg"
              type="data"
              placeholder="Birthday"
              value={birthday}
              onChange={(e) => createBirthday(e.target.value)}
            />
            <label>Birthday</label>
          </Form.Group>
          <Button
            className="registration-button mt-5"
            size="lg"
            type="button"
            onClick={handleSubmit}
            block>
            Sign Up
          </Button>

          <div className="sign-in">
            <div className="sign-in-text">Already Member?</div>
            <Button
              className="sign-in-button"
              variant="link"
              onClick={() => props.clickSignIn()}>
              Sign In
            </Button>
          </div>
        </Col>
      </Form.Row>
    </Form>
  );
}

// no props
