import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App(){
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light'
    }, [darkMode])

    const toggleMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <Navbar darkMode={darkMode} toggleMode={toggleMode} />
            <main>
                <Hero darkmode={darkMode} />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;