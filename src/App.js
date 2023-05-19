import React from 'react';
import './App.css';
import ParticlesBgHome from './components/config/ParticlesBgHome';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <div className="background-container">
        <ParticlesBgHome />
      </div>

      <Navbar />

      <div className="content-container">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
