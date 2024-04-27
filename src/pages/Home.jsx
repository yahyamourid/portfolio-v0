import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Education from '../components/Education'

const Home = () => {
  return (
    <div className='font-[Poppins] flex flex-col items-center bg-zinc-800 min-h-screen w-full '>
     <NavBar/>
     <Hero/>
     <AboutMe/>
     <Education/>
    </div>

  )
}

export default Home
