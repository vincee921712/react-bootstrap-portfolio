import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className="py-5 mt-auto">
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div>
            <Link to="/" className="brand-gradient fs-5">
              <span className="gradient-text">VE.</span>
            </Link>
            <span className="text-muted small ms-3 font-mono">
              &copy; {new Date().getFullYear()} Vince Dorell F. Esmero &bull; University of San Agustin BSIT.
            </span>
          </div>

          <div className="d-flex gap-4">
            <Link to="/" className="text-muted text-decoration-none small hover-white">
              Home
            </Link>
            <Link to="/about" className="text-muted text-decoration-none small hover-white">
              About
            </Link>
            <Link to="/projects" className="text-muted text-decoration-none small hover-white">
              Projects
            </Link>
            <Link to="/contact" className="text-muted text-decoration-none small hover-white">
              Contact
            </Link>
            <a
              href="https://github.com/vincee921712"
              target="_blank"
              rel="noreferrer"
              className="text-muted text-decoration-none small hover-white"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
