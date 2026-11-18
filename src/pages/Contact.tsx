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
    <div className="py-5 page-wrapper">
      <Container>
        {/* Header */}
        <div className="mb-5 pb-4 border-bottom border-secondary border-opacity-25 page-header-section">
          <span className="gradient-badge gradient-badge-accent mb-3 px-3 py-2 fs-6">PUBLIC CONTACT</span>
          <h1 className="page-main-title fw-extrabold text-dark mb-3">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="page-lead-text text-muted mb-0">
            Reach out for academic collaborations, capstone discussions, or developer inquiries.
          </p>
        </div>

        <Row className="g-5">
          {/* Left: Contact Info */}
          <Col lg={5}>
            <div className="d-flex flex-column gap-4">
              <h3 className="section-title fw-bold text-dark mb-1">Contact Details</h3>

              {/* Email */}
              <Card className="gradient-card p-4 p-md-4">
                <span className="font-mono gradient-text-accent small mb-2">EMAIL ADDRESS</span>
                <a
                  href="mailto:esmerovince999@gmail.com"
                  className="contact-channel-link text-dark text-decoration-none font-mono text-break mb-2 d-block"
                >
                  esmerovince999@gmail.com
                </a>
                <span className="card-item-desc text-muted">Direct inquiries and communications.</span>
              </Card>

              {/* GitHub */}
              <Card className="gradient-card p-4 p-md-4">
                <span className="font-mono gradient-text-accent small mb-2">GITHUB PROFILE</span>
                <a
                  href="https://github.com/vincee921712"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-channel-link text-dark text-decoration-none font-mono text-break mb-2 d-block"
                >
                  https://github.com/vincee921712
                </a>
                <span className="card-item-desc text-muted">Public repositories and coding activity.</span>
              </Card>

              {/* Institution */}
              <Card className="gradient-card p-4 p-md-4">
                <span className="font-mono gradient-text-accent small mb-2">ACADEMIC INSTITUTION</span>
                <div className="card-item-title text-dark mb-2">University of San Agustin</div>
                <span className="card-item-desc text-muted">BS Information Technology (2024–Present)</span>
              </Card>
            </div>
          </Col>

          {/* Right: Interactive Form */}
          <Col lg={7}>
            <Card className="gradient-card p-4 p-md-5">
              <h3 className="section-title fw-bold text-dark mb-2">Send a Message</h3>
              <p className="page-lead-text text-muted mb-4">Complete the fields below to initiate communication.</p>

              {submitted && (
                <Alert
                  variant="success"
                  onClose={() => setSubmitted(false)}
                  dismissible
                  className="gradient-card-static border-success text-dark mb-4 font-mono fs-6 p-4"
                >
                  <strong>✓ MESSAGE TRANSMITTED</strong>: Thank you for reaching out! Your message was received successfully.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="g-4 mb-4">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label className="text-dark font-mono fs-6 mb-2">Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="gradient-input form-control-lg fs-6"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label className="text-dark font-mono fs-6 mb-2">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="gradient-input form-control-lg fs-6"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="text-dark font-mono fs-6 mb-2">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="gradient-input fs-6"
                  />
                </Form.Group>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gradient-primary btn-hero w-100 justify-content-center mt-2"
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
