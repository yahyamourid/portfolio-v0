import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from 'framer-motion'

const education = [
    { title: "High school diploma", periode: "2020", details: "High school diploma  in physical sciences, with highest honors", place: "Imam El Ghazali, Sidi Bennour" },
    { title: "Preparatory Cycle", periode: "2020-2022", details: "Preparatory cycle in mathematics and physics", place: "Ensa EL-jadida" },
    { title: "Engineering Cycle", periode: "2022-present", details: "Specializing in computer engineering and emerging technologies (2ITE)", place: "Ensa EL-jadida" }
];

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

const animationdetails = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.1,
            duration: 0.2,
            ease: 'easeInOut'
        }
    }
};

const Education = () => {
    const [showDetails, setShowDetails] = useState({});

    const toggleDetails = (index) => {
        setShowDetails({
            ...showDetails,
            [index]: !showDetails[index]
        });
    };

    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen h-screen text-white tracking-wider gap-10'>
            <p className='text-2xl font-semibold'>Education</p>
            <div className="w-2/5 flex flex-col gap-3 p-3 ">
                {education.map((item, index) => (
                    <motion.span
                        key={index}
                        className='flex flex-col border border-zinc-600 border-opacity-60 rounded-xl p-3 hover:bg-zinc-700 hover:bg-opacity-30'
                        variants={animation} initial="hidden" animate="show">
                        <span className='flex items-center justify-between'>
                            <p className='font-bold'>{item.title}</p>
                            <p className='flex items-center font-light '>
                                {item.periode}
                                <button onClick={() => toggleDetails(index)} className='ml-1 text-orange-500 hover:text-orange-600 duration-300 '>
                                    {showDetails[index] ? <FaMinus /> : <FaPlus />}
                                </button>
                            </p>
                        </span>
                        {showDetails[index] && (
                            <motion.span
                                className='flex flex-col gap-0.5 text-xs text-zinc-500 border-t border-zinc-600 mt-2 pt-2 mx-3'
                                variants={animationdetails} initial="hidden" animate="show">
                                <p>{item.details}</p>
                                <span className='flex items-center gap-1 ml-2'>
                                    <IoLocationOutline /> <i>{item.place}</i>
                                </span>
                            </motion.span>
                        )}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}

export default Education;