import "./About.css"

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">
        <h2 className="about-title">About <span>Me</span></h2>
        <p className="about-bio">I'm a passionate Full Stack Developer and Software Development
          student based in Nairobi, Kenya. I enjoy building web applications that solve real-world
          problems and love truning ideas into working products through code. </p>

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
