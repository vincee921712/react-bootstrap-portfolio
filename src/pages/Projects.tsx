import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Projects: React.FC = () => {
  return (
    <div className="py-5 page-wrapper">
      <Container>
        {/* Header */}
        <div className="mb-5 pb-4 border-bottom border-secondary border-opacity-25 page-header-section">
          <span className="gradient-badge gradient-badge-accent mb-3 px-3 py-2 fs-6">PROJECT SHOWCASE</span>
          <h1 className="page-main-title fw-extrabold text-light mb-3">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="page-lead-text text-muted mb-0">
            Capstone proposal and software development initiatives by Vince Dorell F. Esmero.
          </p>
        </div>

        <Row className="g-5">
          {/* Main Card: CommunityVoice */}
          <Col lg={8}>
            <Card className="gradient-card h-100 p-4 p-md-5 d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                <span className="gradient-badge gradient-badge-accent fs-6">
                  CAPSTONE PROPOSAL
                </span>
                <span className="font-mono text-muted fs-6">
                  BSIT // 2026
                </span>
              </div>

              <h2 className="project-display-title fw-bold text-light mb-3">CommunityVoice</h2>
              <p className="project-subtitle gradient-text-accent font-mono mb-4">
                Community Complaint &amp; Feedback Management System
              </p>

              <p className="project-lead-desc text-muted mb-4">
                A complaint management system that gives a community a clear, trackable way to be heard.
              </p>

              <div className="p-4 rounded-3 border border-secondary border-opacity-25 mb-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                <h5 className="text-light fw-bold mb-3 d-flex align-items-center gap-2">
                  <i className="bi bi-bullseye gradient-text fs-4"></i> Core Objectives &amp; Purpose:
                </h5>
                <p className="card-item-desc text-muted mb-0">
                  CommunityVoice is designed to solve neighborhood reporting friction by providing citizens with an intuitive way to log complaints, track progress through structured stages, and enable community leaders to prioritize and resolve issues transparently.
                </p>
              </div>

              <div className="mt-auto pt-4 border-top border-secondary border-opacity-25">
                <span className="text-uppercase font-mono text-muted d-block mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.08em' }}>
                  Applied Technologies:
                </span>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="gradient-badge stack-tag">HTML</span>
                  <span className="gradient-badge stack-tag">CSS</span>
                  <span className="gradient-badge stack-tag">JavaScript</span>
                  <span className="gradient-badge stack-tag">React</span>
                  <span className="gradient-badge stack-tag">Next.js</span>
                  <span className="gradient-badge stack-tag">Node.js</span>
                  <span className="gradient-badge stack-tag">REST APIs</span>
                  <span className="gradient-badge stack-tag">MySQL / MongoDB</span>
                </div>

                <div className="d-flex flex-wrap gap-3 align-items-center">
                  <a
                    href="https://github.com/vincee921712"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-gradient-primary btn-hero"
                  >
                    <i className="bi bi-github"></i>
                    <span>GitHub Profile</span>
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                  <Link to="/contact" className="btn-gradient-outline btn-hero">
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
              <Card className="gradient-card p-4 p-md-4">
                <span className="gradient-badge gradient-badge-accent mb-3 fs-6">ACADEMIC PIPELINE</span>
                <h4 className="sidebar-card-title fw-bold text-light mb-2">Future Works</h4>
                <p className="card-item-desc text-muted mb-0">
                  Future course projects, software assignments, and open-source contributions will be documented and featured here as they are developed.
                </p>
              </Card>

              {/* Cisco Credential Card */}
              <Card className="gradient-card p-4 p-md-4">
                <span className="gradient-badge mb-3 fs-6">VERIFIED CERTIFICATION</span>
                <h4 className="sidebar-card-title fw-bold text-light mb-2">Cisco Packet Tracer</h4>
                <p className="card-item-desc text-muted mb-4">
                  Awarded to Vince Esmero by Networking Academy through the Cisco Networking Academy program.
                </p>
                <Link to="/about" className="btn-gradient-outline btn-hero w-100 justify-content-center">
                  <span>View Details in Resume</span>
                </Link>
              </Card>

              {/* GitHub Card */}
              <Card className="gradient-card p-4 p-md-4">
                <span className="gradient-badge mb-3 fs-6">OPEN SOURCE</span>
                <h4 className="sidebar-card-title fw-bold text-light mb-2">GitHub Repositories</h4>
                <p className="card-item-desc text-muted mb-4">
                  Explore public code repositories and academic work directly on GitHub.
                </p>
                <a
                  href="https://github.com/vincee921712"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gradient-outline btn-hero w-100 justify-content-center"
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
