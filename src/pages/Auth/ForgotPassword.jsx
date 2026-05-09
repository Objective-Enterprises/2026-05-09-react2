import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import './Auth.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <Container
      fluid
      className="auth-container d-flex align-items-center justify-content-center"
    >
      <Card className="auth-card shadow-lg border-0 rounded-4 p-4 p-md-5">
        <h2 className="auth-title">Forgot Password</h2>
        <p className="text-muted text-center mb-4">
          Enter your email address and we'll send you a link to reset your
          password.
        </p>

        {submitted && (
          <Alert variant="success" className="mb-4">
            If an account exists for that email, a reset link has been sent.
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-4">
            <Form.Control
              id="floatingEmail"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="auth-form-control"
            />
            <label htmlFor="floatingEmail" className="auth-form-label">
              Email
            </label>
          </Form.Floating>

          <Button
            type="submit"
            variant="primary"
            className="auth-submit-btn"
            aria-label="Send password reset link"
          >
            <i className="bi bi-envelope me-2"></i>
            Send Reset Link
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default ForgotPassword;
