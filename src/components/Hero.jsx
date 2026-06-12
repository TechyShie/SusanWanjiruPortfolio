import './Hero.css'
import heroCharacter from '../assets/hero-character.png'

function Hero(){
    return(
        <section className="hero" id="home">
          
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Susan Wanjiru</h1>
            <h2 className="hero-title">Full-Stack <span>Developer</span></h2>
            <p className="hero-description">I build modern, responsive web applications 
            using React, Javascript and Python - turning ideas into real, working products. 
            Open to internship opportunities and exciting projects.</p>

            <div className="hero-buttons">
                <a href="#projects" className="btn-primary">View Projects</a>
                <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
          </div>

          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img src={heroCharacter} alt="Susan Wanjiru" className="hero-image" />
            </div>
          </div>

        </section>
    );
}

export default Hero;