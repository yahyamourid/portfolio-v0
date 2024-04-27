import React from 'react'
import {motion} from 'framer-motion'

const animation = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};
const NavBar = () => {
  return (
    <motion.div
     className='fixed z-50 top-5 flex justify-between items-center px-8 py-2 rounded-3xl bg-opacity-90 bg-zinc-800 tracking-widest border-opacity-60  w-3/4 border border-zinc-600  '
     variants={animation} initial="hidden" animate="show">
      <p className='text-2xl text-white font-bold '>
        <span className='text-orange-500'>Y</span>ahya
      </p>
      <span className='flex gap-6 text-zinc-400 text-sm font-light'>
        <a className='hover:text-white duration-500 ' href='#'>Home</a>
        <a className='hover:text-white duration-500 ' href='#'>About</a>
        <a className='hover:text-white duration-500 ' href='#'>Skills</a>
        <a className='hover:text-white duration-500 ' href='#'>Experiences</a>
        <a className='hover:text-white duration-500 ' href='#'>Projects</a>
      </span>
      <button className='text-white bg-orange-500 py-1 px-3 rounded-lg hover:bg-orange-700 duration-300 text-sm tracking-wider font-medium'>
        Contact me
      </button>
    </motion.div>
  )
}

export default NavBar
