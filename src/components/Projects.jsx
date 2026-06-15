import './Projects.css'
import ecopulse from '../assets/eco_pulse_ss.png'
import campus from '../assets/campus_connect_ss.png'
import medicine from '../assets/medicine_explorer_ss.png'

function Projects() {
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

  return (
    <section className="projects" id="projects">

      <h2 className="projects-title">My <span>Projects</span></h2>

      <div className="projects-scroll">
        {projects.map((project) => (
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

    </section>
  )
}

export default Projects