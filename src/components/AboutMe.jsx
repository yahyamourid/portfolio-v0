import React from 'react';
import avatar from '../assets/avatar.jpeg';
import { IoLocationOutline } from "react-icons/io5";
import { PiBatteryMedium } from "react-icons/pi";
import { MdOutlinePhoneInTalk, MdOutlineMailOutline } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

const aboutMeData = [
    { icon: <PiBatteryMedium className='text-zinc-500 ' />, label: "Age:", value: "22" },
    { icon: <IoLocationOutline className='text-zinc-500 ' />, label: "Location:", value: "EL-jadida | Morocco" },
    { icon: <MdOutlinePhoneInTalk className='text-zinc-500 ' />, label: "Phone:", value: "+212 614383635" },
    { icon: <MdOutlineMailOutline className='text-zinc-500 ' />, label: "Email:", value: "mouridyahya180@gmail.com" }
];

const social = [
    { icon: <FaFacebook />, url: "https://www.facebook.com/yahya.mourid.7" },
    { icon: <AiFillInstagram />, url: "https://www.instagram.com/yahya__mourid/" },
    { icon: <IoLogoGithub />, url: "https://github.com/yahyamourid/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/yahya-mourid-b0432b25b/" },
]

const tiltOptions = {
    max: 90,
    scale: 1,
    speed: 2000
};

const animation = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        x: -80
    },
    show: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            delay: 0.5,
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
};

const AboutMe = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen h-screen text-white tracking-wider gap-10'>
            <p className='text-2xl font-semibold'>About ME</p>
            <motion.div
                className="w-4/5 h-3/6 py-2  flex items-center gap-5 border border-zinc-600 border-opacity-60 rounded-lg hover:bg-zinc-700 hover:bg-opacity-20"
                variants={animation} initial="hidden" animate="show">
                <Tilt
                    className='w-60 h-60 rounded-full ml-6  hover:border-4 border-orange-500 '
                    style={{ background: `url(${avatar})`, backgroundSize: 'cover' }}
                    options={tiltOptions}>
                </Tilt>
                <div className="w-4/6 h-full  flex flex-col justify-center ml-10 group">
                    <p>I am <b className='text-orange-500'>Yahya Mourid</b>, an IT student Engineer.
                        Currently pursuing a degree in Computer Engineering at ENSA El Jadida,
                        specializing in computer engineering and emerging technologies <b>(2ITE)</b>
                    </p>
                    <div className="flex flex-col ml-5 mt-2 text-sm gap-0.5">
                        {aboutMeData.map((item, index) => (
                            <span key={index} className='flex items-center gap-1 '>
                                {item.icon}
                                <p className='text-zinc-500 font-medium '>{item.label}</p>
                                <p>{item.value}</p>
                            </span>
                        ))}
                    </div>
                    <div className="ml-5 mt-4 text-2xl flex items-center gap-5 ">
                        {social.map((item, index) => (
                            <a
                                key={index}
                                className='hover:text-orange-500 hover:scale-110 hover:-translate-y-1 duration-300'
                                href={item.url}
                                target='_blank'>{item.icon}</a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
