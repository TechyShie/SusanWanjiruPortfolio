import "./Navbar.css"
import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

function Navbar({ darkMode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <div className="navbar-logo">SW.</div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" 
             onClick={closeMenu}
             className={activeSection === 'home' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" 
             onClick={closeMenu}
             className={activeSection === 'about' ? 'active' : ''}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" 
             onClick={closeMenu}
             className={activeSection === 'skills' ? 'active' : ''}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" 
             onClick={closeMenu}
             className={activeSection === 'projects' ? 'active' : ''}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" 
             onClick={closeMenu}
             className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </a>
        </li>
      </ul>

      <div className="navbar-actions">
        <button className="theme-toggle" onClick={toggleMode}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

    </nav>
  )
}

export default Navbar