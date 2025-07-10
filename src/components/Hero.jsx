import React from 'react';
import './Hero.css';
import profile from '../assets/profile.png';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-right">
        <div className="donut-wrapper">
          <div className="donut-ring"></div>
          <img src={profile} alt="Rohail" />
        </div>

      </div>

      <div className="hero-left">
        <p className="small-intro">Hi, this is</p>
        <h1>
          <span className="logo-orange">Ro</span>
          <span className="logo-black">hail</span>
        </h1>
        <p className="hero-desc">
          I’m a Front-End Developer who builds sleek, interactive websites using React.js and modern UI/UX principles.
        </p>
        <div className="btn-wrpper">
          <a href="#contact" className="custom-button">Let's talk</a>
        </div>
        {/* <div className="social-icons">
          <a href="https://github.com/Rohail-Tauq" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/rohail-tauqeer" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
          <a href="https://www.upwork.com/freelancers/~01993a327541e0b1da" target="_blank" className="social-icon upwork">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon upwork-icon">
              <path
                fill="currentColor"
                d="M448 32H64C28.7 32 0 60.7 0 96v320c0 35.3 
                28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM370.8 
                315.6c-39.1 0-61.5-24.6-74.4-49.2l-8.2-16.1c-7.2-13.8-12.3-23.6-17.8-30.3v49.8c0 
                11.4-9.3 20.7-20.7 20.7s-20.7-9.3-20.7-20.7v-56.6c-10.7 8.3-20.5 
                23.6-29.8 45.4-14.4 33.4-30.7 71.1-70.6 71.1-49.2 0-78.6-54.2-78.6-109.8 0-11.4 
                9.3-20.7 20.7-20.7s20.7 9.3 20.7 20.7c0 38.3 16.4 68.3 37.2 68.3 13.9 0 24.8-20.4 
                37.2-48.9 15.5-35.7 33.1-76.2 79-76.2 34.5 0 54.1 24.3 70.2 54.3l8.2 
                16.1c12.8 25.1 24.4 42.7 48.6 42.7 11.4 0 20.7 9.3 20.7 
                20.7s-9.3 20.7-20.7 20.7z"
              />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
