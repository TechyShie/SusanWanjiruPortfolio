import './Projects.css'

function Projects() {
  const projects = [
    {
      name: "Traditional Medicine Explorer",
      description: "A web application preserving and showcasing traditional medicinal knowledge from Kenyan communities. Users can explore herbal remedies and learn about medicinal plants.",
      tech: ["React", "Vite", "Material UI", "JSON"],
      github: "https://github.com/Rubil-Mogere-94/traditional-medicine-explorer",
      live: "https://traditional-medicine-explorer.vercel.app/"
    },
    {
      name: "EcoPulse",
      description: "An AI-powered sustainability tracker helping individuals monitor and improve their environmental impact through data-driven insights and gamification.",
      tech: ["React", "Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/TechyShie/EcoPulse_Frontend",
      live: "https://eco-pulse-frontend.vercel.app/"
    },
    {
      name: "Campus Connect",
      description: "A modern responsive dashboard for university students to manage campus activities, events, clubs, academic resources and personal tasks in one place.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/TechyShie/Campus-Connect",
      live: "https://techyshie.github.io/Campus-Connect/"
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My <span>Projects</span></h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span className="tech-tag" key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={project.live} target="_blank" rel="noreferrer">Live Demo</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects