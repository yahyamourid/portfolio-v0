import React from 'react';
import './styles/About.css';
import ParticlesBgHome from './../components/config/ParticlesBgHome';

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';


const Projects = () => {
  return (
    <>
      <div className="about-container">
          
        <div className="projects">
          <motion.h2
            className="projects-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Projects
          </motion.h2>
          <div className="project-cards">
            <Tilt className="tilt" options={{ max: 15, scale: 1.05 }}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 0.8 }}
              >
                <img src='https://cdn.dribbble.com/users/1165981/screenshots/12632357/media/4afbf2b702ef8fed9177804caf042656.png?compress=1&resize=400x300' alt="backend" />
                <h3>Room management web application</h3>
              </motion.div>
            </Tilt>
            <Tilt className="tilt" options={{ max: 15, scale: 1.05 }}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 0.8 }}
              >
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOopzBug0GhMK8umqVk2Hl_-cENKua4aNeA&usqp=CAU' alt="ux" />
                <h3>Pokemon mobile app</h3>
              </motion.div>
            </Tilt>
            <Tilt className="tilt" options={{ max: 15, scale: 1.05 }}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 0.8 }}
              >
                <img src='data:image/png;base64,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' alt="game" />
                <h3>PFA:scientific conference management web application</h3>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects
