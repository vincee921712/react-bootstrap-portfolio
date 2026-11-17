import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Projects: React.FC = () => {
  return (
    <div className="py-5">
      <Container>
        {/* Header */}
        <div className="mb-5 pb-4 border-bottom border-secondary border-opacity-25">
          <span className="gradient-badge gradient-badge-accent mb-2">PROJECT SHOWCASE</span>
          <h1 className="display-4 fw-extrabold text-light mb-2">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="lead text-muted mb-0" style={{ maxWidth: '640px' }}>
            Capstone proposal and software development initiatives by Vince Dorell F. Esmero.
          </p>
        </div>

        <Row className="g-5">
          {/* Main Card: CommunityVoice */}
          <Col lg={8}>
            <Card className="gradient-card h-100 p-4 p-md-5 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="gradient-badge gradient-badge-accent">
                  CAPSTONE PROPOSAL
                </span>
                <span className="font-mono text-muted small">
                  BSIT // 2026
                </span>
              </div>

              <h2 className="display-6 fw-bold text-light mb-2">CommunityVoice</h2>
              <p className="h5 gradient-text-accent font-mono mb-4">
                Community Complaint &amp; Feedback Management System
              </p>

              <p className="lead text-muted mb-4" style={{ lineHeight: '1.8' }}>
                A complaint management system that gives a community a clear, trackable way to be heard.
              </p>

              <div className="p-4 rounded-3 border border-secondary border-opacity-25 mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                <h6 className="text-light fw-bold mb-2">
                  <i className="bi bi-bullseye gradient-text me-2"></i> Core Objectives &amp; Purpose:
                </h6>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                  CommunityVoice is designed to solve neighborhood reporting friction by providing citizens with an intuitive way to log complaints, track progress through structured stages, and enable community leaders to prioritize and resolve issues transparently.
                </p>
              </div>

              <div className="mt-auto pt-4 border-top border-secondary border-opacity-25">
                <span className="text-uppercase font-mono text-muted small d-block mb-3">
                  Applied Technologies:
                </span>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="gradient-badge">HTML</span>
                  <span className="gradient-badge">CSS</span>
                  <span className="gradient-badge">JavaScript</span>
                  <span className="gradient-badge">React</span>
                  <span className="gradient-badge">Next.js</span>
                  <span className="gradient-badge">Node.js</span>
                  <span className="gradient-badge">REST APIs</span>
                  <span className="gradient-badge">MySQL / MongoDB</span>
                </div>

                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <a
                    href="https://github.com/vincee921712"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gradient-primary"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub Profile</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <Link to="/contact" className="btn-gradient-outline">
                    <span>Contact About Project</span>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>

          {/* Right Sidebar: Pipeline & Cisco Credential */}
          <Col lg={4}>
            <div className="d-flex flex-column gap-4">
              {/* Pipeline Notice */}
              <Card className="gradient-card p-4">
                <span className="gradient-badge gradient-badge-accent mb-2">ACADEMIC PIPELINE</span>
                <h4 className="h5 fw-bold text-light mb-2">Future Works</h4>
                <p className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                  Future course projects, software assignments, and open-source contributions will be documented and featured here as they are developed.
                </p>
              </Card>

              {/* Cisco Credential Card */}
              <Card className="gradient-card p-4">
                <span className="gradient-badge mb-2">VERIFIED CERTIFICATION</span>
                <h4 className="h5 fw-bold text-light mb-1">Cisco Packet Tracer</h4>
                <p className="text-muted small mb-3">
                  Awarded to Vince Esmero by Networking Academy through the Cisco Networking Academy program.
                </p>
                <Link to="/about" className="btn-gradient-outline btn-sm w-100 justify-content-center">
                  <span>View Details in Resume</span>
                </Link>
              </Card>

              {/* GitHub Card */}
              <Card className="gradient-card p-4">
                <span className="gradient-badge mb-2">OPEN SOURCE</span>
                <h4 className="h5 fw-bold text-light mb-1">GitHub Repositories</h4>
                <p className="text-muted small mb-3">
                  Explore public code repositories and academic work directly on GitHub.
                </p>
                <a
                  href="https://github.com/vincee921712"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient-outline btn-sm w-100 justify-content-center"
                >
                  <i className="bi bi-github"></i>
                  <span>github.com/vincee921712</span>
                </a>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
