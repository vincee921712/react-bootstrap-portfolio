import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

export const NavigationBar: React.FC = () => {
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <nav className="gradient-navbar sticky-top">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          {/* Left: Gradient Monogram */}
          <Link to="/" onClick={handleNavClick} className="brand-gradient">
            <span className="gradient-text">VE.</span>
          </Link>

          {/* Center: Clean Nav Links */}
          <div className="d-flex align-items-center gap-1 gap-md-2">
            <NavLink
              to="/"
              onClick={handleNavClick}
              className={({ isActive }) => `gradient-nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleNavClick}
              className={({ isActive }) => `gradient-nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              onClick={handleNavClick}
              className={({ isActive }) => `gradient-nav-link ${isActive ? 'active' : ''}`}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className={({ isActive }) => `gradient-nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </div>

          {/* Right: GitHub Button */}
          <div>
            <a
              href="https://github.com/vincee921712"
              target="_blank"
              rel="noreferrer"
              className="btn-gradient-outline btn-sm py-2 px-3"
            >
              <i className="bi bi-github"></i>
              <span className="d-none d-sm-inline font-mono small">GitHub</span>
            </a>
          </div>
        </div>
      </Container>
    </nav>
  )
}
