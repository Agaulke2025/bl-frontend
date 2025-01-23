import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  return (
    <Form>
      <Form.Group controlId="fromName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>

      <Form.Group controlId="fromUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
          />
          <Button
            variant="outline-secondary"
            onClick={handleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputGroup>
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <InputGroup>
          <Form.Control type={showConfirmPassword ? 'text' : 'password'}/>
          <Button
            variant="outline-secondary"
            onClick={handleShowConfirmPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputGroup>
      </Form.Group>
      <InputGroup>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <Button variant="primary" href="/login">
          Log in
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SignUp
