import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section className="py-5 my-3 hero-section">
        <Container>
          <Row className="align-items-center gy-5">
            {/* Left: Headline & Bio */}
            <Col lg={7} className="order-2 order-lg-1 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 mb-4 rounded-pill gradient-card-static border">
                <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill font-mono" style={{ fontSize: '0.85rem' }}>
                  ● Available for Collaborations
                </span>
                <span className="text-muted font-mono" style={{ fontSize: '0.9rem' }}>
                  University of San Agustin &bull; BSIT
                </span>
              </div>

              <h1 className="hero-title mb-3">
                Hi, I'm <br />
                <span className="gradient-text hero-name">Vince Dorell F. Esmero</span>
              </h1>

              <h2 className="hero-subtitle gradient-text-accent fw-bold font-mono mb-4">
                IT Student &amp; Full-Stack Developer
              </h2>

              <p className="hero-bio text-muted mb-4" style={{ maxWidth: '680px' }}>
                A third-year IT student who likes turning ideas into things that work in the browser,
                from clean interfaces to the logic behind them.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-5">
                <Link to="/projects" className="btn-gradient-primary btn-hero">
                  <i className="bi bi-rocket-takeoff"></i>
                  <span>View Projects</span>
                </Link>
                <Link to="/contact" className="btn-gradient-outline btn-hero">
                  <i className="bi bi-chat-text"></i>
                  <span>Get In Touch</span>
                </Link>
                <Link to="/about" className="btn btn-link text-muted text-decoration-none d-inline-flex align-items-center gap-2 font-mono fs-6">
                  Resume Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              {/* Verified Technical Skills Highlight */}
              <div className="pt-4 border-top border-secondary border-opacity-25">
                <span className="text-uppercase font-mono text-muted d-block mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.1em' }}>
                  // Technical Stack &amp; Languages
                </span>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                  <span className="gradient-badge stack-tag"><i className="bi bi-layers"></i> React</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-lightning-charge"></i> Next.js</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-hdd-network"></i> Node.js</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-terminal"></i> Python</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-code-slash"></i> TypeScript / JS</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-database"></i> MySQL</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-server"></i> MongoDB</span>
                  <span className="gradient-badge stack-tag"><i className="bi bi-router"></i> Cisco Packet Tracer</span>
                </div>
              </div>
            </Col>

            {/* Right: Gradient Ring Photo */}
            <Col lg={5} className="order-1 order-lg-2 text-center">
              <div className="gradient-avatar-wrapper mb-4">
                <img
                  src="/profile.jpg"
                  alt="Vince Dorell F. Esmero"
                  className="gradient-avatar-img hero-avatar-img"
                />
              </div>

              <div className="gradient-card mx-auto p-3 text-start" style={{ maxWidth: '380px' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.06)' }}>
                    <i className="bi bi-mortarboard text-light fs-3"></i>
                  </div>
                  <div>
                    <h5 className="mb-0 text-light fw-bold">3rd Year BSIT</h5>
                    <small className="text-muted font-mono fs-6">University of San Agustin</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-5 my-5 border-top border-bottom border-secondary border-opacity-10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={9}>
              <span className="gradient-badge gradient-badge-accent mb-4 px-3 py-2 fs-6">ABOUT THE PHILOSOPHY</span>
              <p className="quote-text fw-normal text-light mb-4">
                "I’m a third-year IT student who enjoys bringing ideas to life in the browser from the clean, responsive interfaces users see to the backend logic that powers them. For me, web development is all about pairing thoughtful design with practical problem-solving to build things that simply work."
              </p>
              <div className="font-mono text-muted fs-6">
                Vince Dorell F. Esmero &bull; University of San Agustin (2024–Present)
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 my-5 text-center">
        <Container>
          <div className="py-4">
            <h2 className="cta-title fw-bold text-light mb-3">
              Interested in <span className="gradient-text">collaborating?</span>
            </h2>
            <p className="text-muted font-mono fs-5 mb-5">
              esmerovince999@gmail.com &bull; github.com/vincee921712
            </p>
            <div className="d-inline-flex flex-wrap justify-content-center gap-3">
              <Link to="/contact" className="btn-gradient-primary btn-hero">
                <span>Send a Message</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/about" className="btn-gradient-outline btn-hero">
                <span>View Full Resume</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
