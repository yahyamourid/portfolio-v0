import React from 'react';
import './About.css';
import ParticlesBgHome from './../components/config/ParticlesBgHome';
import imgprofil from "../assets/goku.jpg"
import backend from "../assets/backend.png"
import ux from "../assets/ux.png"
import game from "../assets/game.png"

const About = () => {
  return (
    <>
    <div className="about-container">
      <div className="about-info">
        <div className="profile-picture">
          <img src={imgprofil} alt="Profile" />
        </div>
        <div className="bio">
          <h2 >Biography</h2>
          <p>My name is Yahya Mourid, and I am a student pursuing an engineering degree in Computer Science at ENSA El Jadida in Morocco. I am currently enrolled in the 2ITE program, specializing in Information Technology Engineering.</p>
        </div>
      </div>
      <div className="projects">
        <h2 className="projects-heading">Development domains</h2>
        <div className="project-cards">
          <div className="project-card">
            <img src={backend} alt="backend" />
            <h3>Backend</h3>
          </div>
          <div className="project-card">
            <img src={ux} alt="ux" />
            <h3>Frontend</h3>
          </div>
          <div className="project-card">
            <img src={game} alt="game" />
            <h3>Games</h3>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
