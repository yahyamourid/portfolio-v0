import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faGraduationCap, faBriefcase, faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faBars, faHome, faUser, faGraduationCap, faBriefcase, faCode, faEnvelope);


function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const handleLinkClick = () => {
        setIsActive(false);
    };
    return (
        <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={handleLinkClick}>
                <div className="logo">
                    <h1 className="logo-title">YM</h1>
                </div>
            </Link>


            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="home" spy={true} smooth={true} offset={-70} duration={500} onClick={handleLinkClick}>
                        <FontAwesomeIcon className="nav-icon" icon={faHome} />
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500} onClick={handleLinkClick}>
                        <FontAwesomeIcon className="nav-icon" icon={faUser} />
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon className="nav-icon" icon={faGraduationCap} />
                        Education
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon className="nav-icon" icon={faBriefcase} />
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon className="nav-icon" icon={faCode} />
                        Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleLinkClick}
                    >
                        <FontAwesomeIcon className="nav-icon" icon={faEnvelope} />
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
