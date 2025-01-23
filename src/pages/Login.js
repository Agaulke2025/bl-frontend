import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LogIn = () => {

  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Form>
      <Form.Group controlId="formBasicEmailUserName">
        <Form.Label>Email address or Username</Form.Label>
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
      </Form.Group>
      <Button variant="primary" href="/signup">
        Sign up
      </Button>
    </Form>
  )
}

export default LogIn
