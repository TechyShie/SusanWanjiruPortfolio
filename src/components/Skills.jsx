import './Skills.css'
import useScrollReveal from "../hooks/useScrollReveal"


function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
    },
    {
      category: "Backend", 
      items: ["Python", "Flask", "FastAPI", "REST APIs", "JWT Auth"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "SQLite", "SQL"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Vercel", "Render"]
    }
  ]

  const ref = useScrollReveal()


  return (
    <section className="skills reveal" id="skills" ref={ref}>
      <h2 className="skills-title">My <span>Skills</span></h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3>{group.category}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills