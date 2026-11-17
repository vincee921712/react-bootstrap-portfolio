import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-5 my-auto">
        <Container>
          <Row className="align-items-center gy-5">
            {/* Left: Headline & Bio */}
            <Col lg={7} className="order-2 order-lg-1 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-4 rounded-pill gradient-card-static border">
                <span className="badge bg-success-subtle text-success border border-success-subtle rounded-pill font-mono small">
                  ● Available for Collaborations
                </span>
                <span className="text-muted small font-mono">University of San Agustin &bull; BSIT</span>
              </div>

              <h1 className="display-4 fw-extrabold text-light mb-2">
                Hi, I'm <span className="gradient-text">Vince Dorell F. Esmero</span>
              </h1>

              <h2 className="h4 gradient-text-accent fw-bold font-mono mb-4">
                IT Student &amp; Full-Stack Developer
              </h2>

              <p className="lead text-muted mb-4 fs-5" style={{ maxWidth: '620px', lineHeight: '1.7' }}>
                A third-year IT student who likes turning ideas into things that work in the browser,
                from clean interfaces to the logic behind them.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mb-5">
                <Link to="/projects" className="btn-gradient-primary">
                  <i className="bi bi-rocket-takeoff"></i>
                  <span>View Projects</span>
                </Link>
                <Link to="/contact" className="btn-gradient-outline">
                  <i className="bi bi-chat-text"></i>
                  <span>Get In Touch</span>
                </Link>
                <Link to="/about" className="btn btn-link text-muted text-decoration-none d-inline-flex align-items-center gap-1 font-mono small">
                  Resume Details <i className="bi bi-arrow-right"></i>
                </Link>
              </div>

              {/* Verified Technical Skills Highlight */}
              <div className="pt-4 border-top border-secondary border-opacity-25">
                <span className="text-uppercase small font-mono text-muted d-block mb-3" style={{ fontSize: '0.74rem', letterSpacing: '0.08em' }}>
                  // Technical Stack &amp; Languages
                </span>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
                  <span className="gradient-badge"><i className="bi bi-layers"></i> React</span>
                  <span className="gradient-badge"><i className="bi bi-lightning-charge"></i> Next.js</span>
                  <span className="gradient-badge"><i className="bi bi-hdd-network"></i> Node.js</span>
                  <span className="gradient-badge"><i className="bi bi-terminal"></i> Python</span>
                  <span className="gradient-badge"><i className="bi bi-code-slash"></i> TypeScript / JS</span>
                  <span className="gradient-badge"><i className="bi bi-database"></i> MySQL</span>
                  <span className="gradient-badge"><i className="bi bi-server"></i> MongoDB</span>
                  <span className="gradient-badge"><i className="bi bi-router"></i> Cisco Packet Tracer</span>
                </div>
              </div>
            </Col>

            {/* Right: Gradient Ring Photo */}
            <Col lg={5} className="order-1 order-lg-2 text-center">
              <div className="gradient-avatar-wrapper mb-4">
                <img
                  src="/profile.jpg"
                  alt="Vince Dorell F. Esmero"
                  className="gradient-avatar-img"
                />
              </div>

              <div className="gradient-card mx-auto p-3 text-start" style={{ maxWidth: '340px' }}>
                <div className="d-flex align-items-center gap-3">
                  <div className="p-2 rounded-3" style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(129, 140, 248, 0.2))' }}>
                    <i className="bi bi-mortarboard text-info fs-4"></i>
                  </div>
                  <div>
                    <h6 className="mb-0 text-light fw-bold">3rd Year BSIT</h6>
                    <small className="text-muted font-mono" style={{ fontSize: '0.78rem' }}>University of San Agustin</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Editorial Quote Section */}
      <section className="py-5 my-4 border-top border-bottom border-secondary border-opacity-25" style={{ backgroundColor: 'rgba(255, 255, 255, 0.015)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <span className="gradient-badge gradient-badge-accent mb-3">ABOUT THE PHILOSOPHY</span>
              <p className="h4 fw-normal text-light mb-3" style={{ lineHeight: '1.6' }}>
                "A third-year IT student who likes turning ideas into things that work in the browser, from clean interfaces to the logic behind them."
              </p>
              <div className="font-mono text-muted small">
                Vince Dorell F. Esmero &bull; University of San Agustin (2024–Present)
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 my-4 text-center">
        <Container>
          <div className="py-4">
            <h2 className="display-5 fw-bold text-light mb-3">
              Interested in <span className="gradient-text">collaborating?</span>
            </h2>
            <p className="text-muted font-mono small mb-4">
              esmerovince999@gmail.com &bull; github.com/vincee921712
            </p>
            <div className="d-inline-flex gap-3">
              <Link to="/contact" className="btn-gradient-primary">
                <span>Send a Message</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link to="/about" className="btn-gradient-outline">
                <span>View Full Resume</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
