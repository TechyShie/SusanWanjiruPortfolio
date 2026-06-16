import "./Navbar.css"
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

function Navbar({ darkMode, toggleMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

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
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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