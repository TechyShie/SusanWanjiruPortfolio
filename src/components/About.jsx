import "./About.css"
import aboutCharacter from "../assets/about-character.png"
import useScrollReveal from "../hooks/useScrollReveal"

function About() {
  const ref = useScrollReveal()

  return (
    <section className="about reveal" id="about" ref={ref}>

      <div className="about-image-container">
        <img src={aboutCharacter} alt="About" className="about-image" />
      </div>

      <div className="about-content">
        <h2 className="about-title">About <span>Me</span></h2>
        <p className="about-bio">I'm a passionate Full Stack Developer and Software Development
          student based in Nairobi, Kenya. I enjoy building web applications that solve real-world
          problems and love turning ideas into working products through code.</p>

          <div className="about-stats">
            <div className="stat">
              <h3>5+</h3>
              <p>Projects Built</p>
            </div>
            <div className="stat">
              <h3>1+</h3>
              <p>Years Learning</p>
            </div>
            <div className="stat">
              <h3>3+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Hours Coded</p>
            </div>
          </div>
      </div>

    </section>
  );
}

export default About;