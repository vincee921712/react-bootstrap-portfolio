import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavigationBar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

export const App: React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100" data-bs-theme="dark">
      <ScrollToTop />
      <NavigationBar />
      <main className="flex-grow-1 d-flex flex-column">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
