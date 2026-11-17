import React, { useState } from 'react'
import { Container, Row, Col, Card, Accordion, Button, Modal, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const About: React.FC = () => {
  const [showCertModal, setShowCertModal] = useState(false)

  const educationHistory = [
    {
      level: 'TERTIARY DEGREE',
      school: 'University of San Agustin',
      degree: 'BS Information Technology',
      period: '2024 – Present',
      highlight: 'Core courses in web technologies, databases, networking, and software engineering.',
      active: true,
    },
    {
      level: 'SENIOR HIGH SCHOOL',
      school: 'University of San Agustin',
      degree: 'STEM Academic Track',
      period: '2022 – 2024',
      highlight: 'Foundational mathematics, basic programming principles, and science capstones.',
      active: false,
    },
    {
      level: 'JUNIOR HIGH SCHOOL',
      school: 'University of San Agustin',
      degree: 'High School Diploma',
      period: '2018 – 2022',
      highlight: 'Computer education courses and science laboratory projects.',
      active: false,
    },
    {
      level: 'ELEMENTARY EDUCATION',
      school: 'University of San Agustin',
      degree: 'Primary Education Diploma',
      period: '2012 – 2018',
      highlight: 'Consistent academic foundation.',
      active: false,
    },
  ]

  const skillGroups = [
    {
      title: 'Front End',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
    },
    {
      title: 'Back End',
      skills: ['Node.js', 'Python', 'PHP', 'REST APIs'],
    },
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'SQL'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'SQLite', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['VS Code', 'GitHub', 'Antigravity', 'Cisco Packet Tracer'],
    },
  ]

  return (
    <div className="py-5 page-wrapper">
      <Container>
        {/* Header */}
        <div className="mb-5 pb-4 border-bottom border-secondary border-opacity-25 page-header-section">
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-4">
            <div>
              <span className="gradient-badge gradient-badge-accent mb-3 px-3 py-2 fs-6">CURRICULUM VITAE</span>
              <h1 className="page-main-title fw-extrabold text-light mb-3">
                Resume &amp; <span className="gradient-text">Qualifications</span>
              </h1>
              <p className="page-lead-text text-muted mb-0">
                Academic progression, technical proficiencies, and verified credentials for Vince Dorell F. Esmero.
              </p>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <Button
                variant="link"
                className="btn-gradient-outline text-decoration-none btn-hero"
                onClick={() => setShowCertModal(true)}
              >
                <i className="bi bi-patch-check-fill text-info"></i>
                <span>View Cisco Credential</span>
              </Button>
              <Link to="/contact" className="btn-gradient-primary btn-hero">
                <span>Contact Vince</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section 1: Education */}
        <section className="mb-5 pb-5 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3 mb-4">
            <i className="bi bi-mortarboard gradient-text fs-2"></i>
            <h2 className="section-title fw-bold text-light mb-0">Educational Background</h2>
          </div>

          <Row className="g-4">
            {educationHistory.map((item, index) => (
              <Col md={6} key={index}>
                <Card className="gradient-card h-100 p-4 p-md-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="gradient-badge" style={{ fontSize: '0.8rem' }}>
                      {item.level}
                    </span>
                    <span className="font-mono text-muted fs-6">{item.period}</span>
                  </div>
                  <h3 className="card-item-title fw-bold text-light mb-2 mt-2">{item.degree}</h3>
                  <div className="font-mono gradient-text-accent fs-6 mb-3">{item.school}</div>
                  <p className="card-item-desc text-muted mt-auto mb-0">{item.highlight}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Section 2: Technical Skills */}
        <section className="mb-5 pb-5 border-bottom border-secondary border-opacity-25">
          <div className="d-flex align-items-center gap-3 mb-4">
            <i className="bi bi-cpu gradient-text fs-2"></i>
            <h2 className="section-title fw-bold text-light mb-0">Technical Skills</h2>
          </div>

          <Row className="g-4">
            {skillGroups.map((group, idx) => (
              <Col lg={4} md={6} key={idx}>
                <Card className="gradient-card h-100 p-4 p-md-4">
                  <h3 className="skill-group-title fw-bold gradient-text mb-3">{group.title}</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="gradient-badge stack-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        {/* Section 3: Verified Projects & Certifications */}
        <section className="mb-5 pb-4">
          <div className="d-flex align-items-center gap-3 mb-4">
            <i className="bi bi-award gradient-text fs-2"></i>
            <h2 className="section-title fw-bold text-light mb-0">Projects &amp; Certifications</h2>
          </div>

          <Accordion defaultActiveKey="0" className="gradient-accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <i className="bi bi-patch-check-fill text-info me-3 fs-5"></i>
                <span className="accordion-heading-text">Certification: Getting Started with Cisco Packet Tracer</span>
              </Accordion.Header>
              <Accordion.Body className="p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                  <div>
                    <h4 className="card-item-title text-light fw-bold mb-2">
                      Awarded to Vince Esmero by Networking Academy through the Cisco Networking Academy program.
                    </h4>
                    <p className="card-item-desc text-muted mb-3">
                      Validates foundational capabilities in computer network simulation, IP topology configuration, and packet inspection inside Cisco Packet Tracer.
                    </p>
                    <span className="gradient-badge gradient-badge-accent fs-6">
                      Verified &bull; Cisco Networking Academy
                    </span>
                  </div>
                  <Button
                    variant="link"
                    className="btn-gradient-outline text-decoration-none text-nowrap btn-hero"
                    onClick={() => setShowCertModal(true)}
                  >
                    View Credential
                  </Button>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="bi bi-kanban-fill text-primary me-3 fs-5"></i>
                <span className="accordion-heading-text">Capstone Proposal: CommunityVoice</span>
              </Accordion.Header>
              <Accordion.Body className="p-4 p-md-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                  <div>
                    <h4 className="card-item-title text-light fw-bold mb-2">Community Complaint &amp; Feedback Management System</h4>
                    <p className="card-item-desc text-muted mb-3">
                      A complaint management system that gives a community a clear, trackable way to be heard.
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <span className="gradient-badge stack-tag">React</span>
                      <span className="gradient-badge stack-tag">Node.js</span>
                      <span className="gradient-badge stack-tag">MySQL / MongoDB</span>
                    </div>
                  </div>
                  <Link to="/projects" className="btn-gradient-outline text-nowrap text-decoration-none btn-hero">
                    Open in Projects
                  </Link>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>

        {/* Modal: Cisco Certification */}
        <Modal
          show={showCertModal}
          onHide={() => setShowCertModal(false)}
          centered
          size="lg"
          contentClassName="gradient-card-static"
        >
          <Modal.Header closeButton closeVariant="white" className="border-bottom border-secondary border-opacity-25 p-4">
            <Modal.Title className="text-light h5 d-flex align-items-center gap-2">
              <i className="bi bi-patch-check-fill text-info"></i> Cisco Networking Academy
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4 p-md-5">
            <div className="text-center py-3 mb-4">
              <div className="display-3 gradient-text mb-3">
                <i className="bi bi-award"></i>
              </div>
              <h3 className="text-light fw-bold mb-2">Getting Started with Cisco Packet Tracer</h3>
              <p className="font-mono text-muted fs-6 mb-0">Awarded to: Vince Esmero</p>
            </div>
            <ListGroup variant="flush" className="bg-transparent border-top border-secondary border-opacity-25 pt-3">
              <ListGroup.Item className="bg-transparent text-muted fs-6 d-flex justify-content-between px-0 py-3">
                <span>Program:</span>
                <span className="text-light fw-semibold">Cisco Networking Academy program</span>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-muted fs-6 d-flex justify-content-between px-0 py-3">
                <span>Awarded by:</span>
                <span className="text-light fw-semibold">Networking Academy</span>
              </ListGroup.Item>
              <ListGroup.Item className="bg-transparent text-muted fs-6 d-flex justify-content-between px-0 py-3">
                <span>Status:</span>
                <span className="text-success font-mono fw-bold">Verified Complete</span>
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer className="border-top border-secondary border-opacity-25 p-4">
            <Button
              variant="link"
              className="btn-gradient-outline text-decoration-none btn-hero"
              onClick={() => setShowCertModal(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  )
}
