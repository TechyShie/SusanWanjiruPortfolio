import "./Contact.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Get In <span>Touch</span></h2>
      <p className="contact-subtitle">I'm currently open to internship opportunities and exciting projects.</p>

      <div className="contact-container">

        <div className="contact-info">
          
          <div className="contact-item">
            <MdLocationOn className="contact-icon" />
            <p>Nairobi, Kenya</p>
          </div>

          <a href="mailto:susanshie316@gmail.com" className="contact-item">
            <MdEmail className="contact-icon" />
            <p>susanshie316@gmail.com</p>
          </a>

          <a href="tel:+254704843070" className="contact-item">
            <MdPhone className="contact-icon" />
            <p>+254 704 843 070</p>
          </a>

          <div className="contact-socials">
            <a href="https://github.com/TechyShie" 
               target="_blank" 
               rel="noreferrer"
               className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/susan-wanjiru-0585902b7/" 
               target="_blank" 
               rel="noreferrer"
               className="social-icon">
              <FaLinkedin />
            </a>
          </div>

        </div>

        <form className="contact-form" action="https://formspree.io/f/mnjyjlln" method="POST">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="form-input"
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="form-input"
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="form-textarea"
            rows="6"
            required>
          </textarea>
          <button type="submit" className="form-button">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact