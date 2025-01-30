import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LogIn = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [validated, setValidated] = useState(false)

  /* Toggles the password visibility */
  const handleShowPassword = () => {
    setShowPassword(!showPassword)
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
      {/* Email or Username */}
      <Form.Group controlId="formBasicEmailUserName">
        <Form.Label>Email address or Username</Form.Label>
        <Form.Control type="text" required/>
        <Form.Control.Feedback type="invalid">
          Please provide a valid email address or username.
        </Form.Control.Feedback>
      </Form.Group>
      
      {/* Password */}
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={showPassword ? 'text' : 'password'}
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a password.
          </Form.Control.Feedback>
          <Button
            variant="outline-secondary"
            onClick={handleShowPassword}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" href="/signup">
        Sign up
      </Button>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      
    </Form>
  )
}

export default LogIn
