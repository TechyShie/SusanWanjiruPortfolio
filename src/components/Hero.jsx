import './Hero.css'

function Hero(){
    return(
        <section className = "hero">
            <p className = "hero-greeting">Hi, I'm</p>
            <h1 className = "hero-name">Susan Wanjiru</h1>
            <h2 className = "hero-title">Full-Stack <span>Developer</span> </h2>

            <p className = "hero-description">I build modern, responsive web applications using React, Javascript and Python - 
                turning ideas into real, working products. Open to internship opportunities and exiciting projets.</p>

                <div className = "hero-buttons">
                    <button className = "btn-primary">View Project</button>
                    <button className = "btn-outline">Contact Me</button>
                </div>
 

                 
        </section>

    );
}

export default Hero;