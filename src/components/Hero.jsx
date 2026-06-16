import './Hero.css'
import heroCharacter from '../assets/hero-character.png'
import { useState, useEffect } from 'react'

function Hero(){
    const titles = [
        "Full-Stack Developer",
        "React Developer", 
        "Python Developer",
        "Problem Solver"
    ]

    const [currentTitle, setCurrentTitle] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const fullText = titles[currentTitle]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // typing forward
                setDisplayText(fullText.substring(0, displayText.length + 1))
                
                // if finished typing, start deleting after a pause
                if (displayText.length === fullText.length) {
                    setTimeout(() => setIsDeleting(true), 1500)
                }
            } else {
                // deleting
                setDisplayText(fullText.substring(0, displayText.length - 1))
                
                // if finished deleting, move to next title
                if (displayText.length === 0) {
                    setIsDeleting(false)
                    setCurrentTitle((current) => (current + 1) % titles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentTitle])

    return(
        <section className="hero" id="home">
          
          <div className="hero-text">
            <p className="hero-greeting">Hi, I'm</p>
            <h1 className="hero-name">Susan Wanjiru</h1>
            <h2 className="hero-title"><span>{displayText}<span className="cursor">|</span></span></h2>
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