import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { auth } from '../../firebase'

const LoginModal = (props) => {
  const [error, setError] = useState(null)
  
  async function login(event) {
    event.preventDefault()
    const { email, password } = event.target.elements

    try {
      const user = await auth.signInWithEmailAndPassword(email.value, password.value)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
      <Modal show={props.show} onHide={props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
				<Modal.Body>
					<Form onSubmit={login}>
						<Form.Group controlId="email">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>
						<Button variant="outline-primary" onClick={props.onClose} style={{ marginRight: 10}}>
							Cancel
						</Button>
						<Button variant="primary" type="submit" onClick={props.onClose}>
							Login
						</Button>
						{error && <Form.Text style={{color: 'red'}}>{error}</Form.Text>}
					</Form>
				</Modal.Body>
      </Modal>
  )
}

export default LoginModal
