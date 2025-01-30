import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [validated, setValidated] = useState(false)
 
  /* Toggles the password visibility */
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  /* Toggles the confirm password visibility */
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  /* Checks to see if the proper fields are filled out */
  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    setValidated(true)
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      {/* Name */}
      <Form.Group controlId="fromName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" required/>
        <Form.Control.Feedback type="invalid">
          Please provide a name.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Email */}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required/>
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Username */}
      <Form.Group controlId="fromUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" required/>
        <Form.Control.Feedback type="invalid">
          Please provide a username.
        </Form.Control.Feedback>
      </Form.Group>

      {/* Password */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
          required />
          <Button
            variant="outline-secondary"
            onClick={handleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
        </InputGroup>
        <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </Form.Group>

      {/* Confirm Password */}
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
