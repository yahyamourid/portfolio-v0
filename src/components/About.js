import React, { useState } from 'react';
import './styles/About.css';
import ParticlesBgHome from './../components/config/ParticlesBgHome';
import imgprofil from "../assets/goku.jpg"
import backend from "../assets/backend.png"
import ux from "../assets/ux.png"
import game from "../assets/game.png"
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  const handleTap = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div className="about-container">
        <div className="about-info">
          <div className="profile-picture">
            <Tilt
              className="tilt"
              options={{ max: 15, scale: 1.05 }}
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              onTap={handleTap}
            >
              <motion.img
                src={imgprofil}
                alt="Profile"
                initial={{
                  rotateZ: 260,
                }}
                whileHover={{
                  rotateX: 10,
                  rotateY: 10,
                  scale: 1.1,
                  rotateZ: 100,
                  transition: { duration: 0.3 },
                }}
                animate={{
                  rotateZ: isHovered ? 0 : 360,
                  transition: { duration: 10, loop: Infinity },
                }}
              />
            </Tilt>
          </div>
          <div className="bio">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Biography
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              My name is Yahya Mourid, and I am a student pursuing an engineering degree in Computer Science at ENSA El Jadida in Morocco. I am currently enrolled in the 2ITE program, specializing in Information Technology Engineering.
            </motion.p>
          </div>
        </div>
        <div className="projects">
          <motion.h2
            className="projects-heading"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            Development domains
          </motion.h2>
          <div className="project-cards">
            <Tilt className="tilt" options={{ max: 15, scale: 1.05 }}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 0.8 }}
              >
                <img src={backend} alt="backend" />
                <h3>Backend</h3>
              </motion.div>
            </Tilt>
            <Tilt className="tilt" options={{ max: 15, scale: 1.05 }}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 0.8 }}
              >
                <img src={ux} alt="ux" />
                <h3>Frontend</h3>
              </motion.div>
            </Tilt>
            <Tilt className="tilt" options={{ max: 15, scale: 1.05 }}>
              <motion.div
                className="project-card"
                whileHover={{ scale: 0.8 }}
              >
                <img src={game} alt="game" />
                <h3>Games</h3>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
};

export default About
