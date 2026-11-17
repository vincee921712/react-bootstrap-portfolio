import React, { useState } from 'react'
import { Container, Row, Col, Card, Form, Alert } from 'react-bootstrap'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate sending transmission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }, 600)
  }

  return (
    <div className="py-5">
      <Container>
        {/* Header */}
        <div className="mb-5 pb-4 border-bottom border-secondary border-opacity-25">
          <span className="gradient-badge gradient-badge-accent mb-2">PUBLIC CONTACT</span>
          <h1 className="display-4 fw-extrabold text-light mb-2">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="lead text-muted mb-0" style={{ maxWidth: '640px' }}>
            Reach out for academic collaborations, capstone discussions, or developer inquiries.
          </p>
        </div>

        <Row className="g-5">
          {/* Left: Contact Info */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-3">
              <h3 className="h5 fw-bold text-light mb-2">Contact Details</h3>

              {/* Email */}
              <Card className="gradient-card p-4">
                <span className="font-mono gradient-text-accent small mb-1">EMAIL ADDRESS</span>
                <a
                  href="mailto:esmerovince999@gmail.com"
                  className="h6 text-light text-decoration-none font-mono text-break mb-1"
                >
                  esmerovince999@gmail.com
                </a>
                <span className="text-muted small">Direct inquiries and communications.</span>
              </Card>

              {/* GitHub */}
              <Card className="gradient-card p-4">
                <span className="font-mono gradient-text-accent small mb-1">GITHUB PROFILE</span>
                <a
                  href="https://github.com/vincee921712"
                  target="_blank"
                  rel="noreferrer"
                  className="h6 text-light text-decoration-none font-mono text-break mb-1"
                >
                  https://github.com/vincee921712
                </a>
                <span className="text-muted small">Public repositories and coding activity.</span>
              </Card>

              {/* Institution */}
              <Card className="gradient-card p-4">
                <span className="font-mono gradient-text-accent small mb-1">ACADEMIC INSTITUTION</span>
                <div className="h6 text-light mb-1">University of San Agustin</div>
                <span className="text-muted small">BS Information Technology (2024–Present)</span>
              </Card>
            </div>
          </Col>

          {/* Right: Interactive Form */}
          <Col lg={7}>
            <Card className="gradient-card p-4 p-md-5">
              <h3 className="h4 fw-bold text-light mb-1">Send a Message</h3>
              <p className="text-muted small mb-4">Complete the fields below to initiate communication.</p>

              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                  className="gradient-card-static border-success text-light mb-4 font-mono small"
                >
                  <strong>✓ MESSAGE TRANSMITTED</strong>: Thank you for reaching out! Your message was received successfully.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-3 mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label className="text-light small font-mono">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="gradient-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-light small font-mono">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="gradient-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="text-light small font-mono">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="gradient-input"
                  />
                </Form.Group>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gradient-primary w-100 justify-content-center"
                >
                  {submitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <i className="bi bi-send-fill"></i>
                    </>
                  )}
                </button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
