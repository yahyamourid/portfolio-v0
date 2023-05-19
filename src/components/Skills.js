import ux from "../assets/ux.png";
import React, { useState } from 'react';
import './Skills.css'; // Fichier CSS pour le style personnalisé

const Skills = () => {
  const languages = [
    { name: 'Java', image: 'https://cdn-icons-png.flaticon.com/128/5968/5968282.png' },
    { name: 'Python', image: 'https://cdn-icons-png.flaticon.com/128/1387/1387537.png' },
    { name: 'PHP', image: 'https://cdn-icons-png.flaticon.com/128/5968/5968332.png' },
    { name: 'Laravel', image: 'https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png' },
    { name: 'C', image: 'https://cdn-icons-png.flaticon.com/128/3665/3665923.png' },
    { name: 'React', image: 'https://cdn-icons-png.flaticon.com/128/1126/1126012.png' },
    { name: 'MongoDB', image: 'https://cdn-icons-png.flaticon.com/128/2906/2906274.png' }
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleBallClick = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="skills-container">
      <div className="title">
        <h2>Skills</h2>
      </div>
      <div className="ball-container">
        {languages.map((language, index) => (
          <div
            key={index}
            className={`ball ${selectedLanguage === language.name ? 'active' : ''}`}
            onClick={() => handleBallClick(language.name)}
          >
            <img src={language.image} alt={language.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
