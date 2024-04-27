import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';
import React from 'react';
import Background from '../assets/background.svg';
import { ReactTyped } from "react-typed";
import { FaFileDownload } from "react-icons/fa";
import hero from '../assets/hero3.png';

const Hero = () => {
  const tiltOptions = {
    max: 15,
    scale: 1.1,
    speed: 800
  };

  const titleAnimation = {
    hidden: {
      opacity: 0,
      y: -50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  const imgAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  const textAnimation = {
    hidden: {
      opacity: 0,
      x: -50
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className='relative bg-zinc-800 min-h-screen flex flex-col items-center h-screen w-full overflow-hidden'>
      <motion.div className="absolute animate-pulse w-full h-full " style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }}></motion.div>
      <div className='absolute -bottom-60 -left-40 w-2/5 h-4/6  rounded-full bg-orange-500 filter blur-3xl opacity-15'></div>

      <div className='z-40 text-white w-full h-full flex items-center justify-start gap-20 px-24'>
        <div className="flex flex-col w-3/4 h-1/2 tracking-wider py-10 gap-2 mt-8">
          <motion.span className='flex items-center text-4xl w-full' variants={titleAnimation} initial="hidden" animate="show">
            <p className='mr-4 font-medium '>Hi I'm </p>
            <ReactTyped
              className='text-orange-500 font-semibold'
              strings={["Yahya", "a full-stack developer", "an engineering student", "a blockchain developer"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </motion.span>
          <motion.p className='text-zinc-400 text-lg tracking-widest w-3/4' variants={textAnimation} initial="hidden" animate="show">Passionate <b className='text-white'>engineering student</b>  and <b className='text-white'>full-stack developer</b>  committed to innovation and problem-solving</motion.p>
          <motion.button className='group flex items-center text-sm border border-zinc-600 w-1/4 justify-center py-3 bg-zinc-800 rounded-lg mt-6 hover:bg-zinc-700 border-opacity-60 duration-500'
            variants={textAnimation} initial="hidden" animate="show">
            Download CV
            <FaFileDownload className='text-orange-500 ml-2 text-lg group-hover:scale-110 duration-500' />
          </motion.button>
        </div>

        <Tilt className="absolute -bottom-10 -right-8  w-2/5 h-full  flex items-end" options={tiltOptions}>
          <motion.img src={hero} className='w-full opacity-70 ' variants={imgAnimation} initial="hidden" animate="show" />
        </Tilt>

      </div>
    </div>
  );
};

export default Hero;
