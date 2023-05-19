import React from 'react';
import { Motion, spring } from 'react-motion';
import {Tilt} from 'react-tilt';
import './Home.css';

const Home = () => {
  return (
    <div>
      <style>
        {`
          
        `}
      </style>
      <div className="container1">
        <div className="portfolio-info">
          <Motion
            defaultStyle={{ x: -100 }}
            style={{ x: spring(0, { stiffness: 120, damping: 17 }) }}
          >
            {({ x }) => (
              <h1 style={{ transform: `translateX(${x}px)` }}>
                <Tilt options={{ scale: 0.9, max: 25 }}>
                  Hello, I'm <span className="name">Yahya.</span>
                </Tilt>
              </h1>
            )}
          </Motion>
          <Motion
            defaultStyle={{ opacity: 0 }}
            style={{ opacity: spring(1, { stiffness: 60, damping: 12 }) }}
          >
            {({ opacity }) => (
              <div style={{ opacity }}>
                <h2>An engineering student</h2>
                <p>Welcome to my portfolio</p>
              </div>
            )}
          </Motion>
        </div>
      </div>
    </div>
  );
}

export default Home;
