import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-icons">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384063.png" alt="Instagram" />
        </a>
        <a href="hhttps://github.com/yahyamourid/TpLaravel/settings" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/733/733553.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" alt="LinkedIn" />
        </a>
      </div>
      <div className="contact-info">
        <p>Téléphone:  (+212) 6 14 38 36 34</p>
        <p>Diar Alia A2, El jadida</p>
      </div>
    </div>
  );
}

export default Contact;
