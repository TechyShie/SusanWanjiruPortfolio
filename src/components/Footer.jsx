import './Footer.css'
import { FaArrowUp } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      
      <div className="footer-logo">SW.</div>

      <p className="footer-copy">© 2026 Susan Wanjiru. All rights reserved.</p>

      <a href="#home" className="footer-top">
        <FaArrowUp />
      </a>

    </footer>
  )
}

export default Footer