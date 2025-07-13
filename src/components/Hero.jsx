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
          Front-end dev | UI/UX designer | Responsive Design
        </p>
        <div className="btn-wrpper">
          <a href="#contact" className="custom-button">Let's talk</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
