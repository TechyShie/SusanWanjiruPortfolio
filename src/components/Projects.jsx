import './Projects.css'
import { useState } from 'react'
import ecopulse from '../assets/eco_pulse_ss.png'
import campus from '../assets/campus_connect_ss.png'
import medicine from '../assets/medicine_explorer_ss.png'

function Projects() {
  const [currentPage, setCurrentPage] = useState(0)
  const projectsPerPage = 3

  const projects = [
    {
      name: "Traditional Medicine Explorer",
      description: "A web application preserving and showcasing traditional medicinal knowledge from Kenyan communities. Users can explore herbal remedies and learn about medicinal plants.",
      tech: ["React", "Vite", "Material UI", "JSON"],
      live: "https://traditional-medicine-explorer.vercel.app/",
      image: medicine
    },
    {
      name: "EcoPulse",
      description: "An AI-powered sustainability tracker helping individuals monitor and improve their environmental impact through data-driven insights and gamification.",
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      live: "https://eco-pulse-frontend.vercel.app/",
      image: ecopulse
    },
    {
      name: "Campus Connect",
      description: "A modern responsive dashboard for university students to manage campus activities, events, clubs, academic resources and personal tasks in one place.",
      tech: ["HTML", "CSS", "JavaScript"],
      live: "https://techyshie.github.io/Campus-Connect/",
      image: campus
    }
  ]

  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const currentProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  )

  const prev = () => setCurrentPage(p => Math.max(0, p - 1))
  const next = () => setCurrentPage(p => Math.min(totalPages - 1, p + 1))

  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">My <span>Projects</span></h2>

      <div className="projects-grid">
        {currentProjects.map((project) => (
          <div className="project-card" key={project.name}>

            <div className="project-image">
              <img src={project.image} alt={project.name} />
              <a href={project.live}
                target="_blank"
                rel="noreferrer"
                className="project-redirect">
                ↗
              </a>
            </div>

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span className="tech-tag" key={tech}>{tech}</span>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className="projects-nav">
        <button 
          className="nav-btn" 
          onClick={prev}
          disabled={currentPage === 0}>
          ‹
        </button>

        <div className="nav-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentPage ? 'active' : ''}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>

        <button 
          className="nav-btn" 
          onClick={next}
          disabled={currentPage === totalPages - 1}>
          ›
        </button>
      </div>

    </section>
  )
}

export default Projects