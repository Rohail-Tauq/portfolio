import React from 'react';
import './Projects.css';
import typingTest from '../assets/typing.jpg';
import quizApp from '../assets/quiz.webp';
import BMI from '../assets/BMI.jpg';
import weatherApp from '../assets/weather.jpg';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="projects-scroll-container">
        <div className="projects-grid">
          {/* 4 Project Cards */}
          <div className="project-card">
            <img src={typingTest} alt="Typing Speed Test" className="project-image" />
            <div className="project-content">
              <h3>Typing Speed Test</h3>
              <p>Measure typing speed with live WPM tracking.</p>
              <a href="https://rohailtypingtest.vercel.app/"><button className="fancy-button">View</button></a>
            </div>
          </div>

          <div className="project-card">
            <img src={quizApp} alt="Quiz App" className="project-image" />
            <div className="project-content">
              <h3>Quiz App</h3>
              <p>A basic quiz app for practice</p>
              <a href="https://rohailquiz.vercel.app/"><button className="fancy-button">View</button></a>
            </div>
          </div>
          <div className="project-card">
            <img src={weatherApp} alt="Weather App" className="project-image" />
            <div className="project-content">
              <h3>Weather App</h3>
              <p>Live weather using OpenWeather API.</p>
              <a href="https://rohailweatherforecast.vercel.app/"><button className="fancy-button">View</button></a>
            </div>
          </div>

          <div className="project-card">
            <img src={BMI} alt="BMI Calculator" className="project-image" />
            <div className="project-content">
              <h3>BMI Calculator</h3>
              <p>BMI calculation of Metric and Imperial categories</p>
              <a href="https://rohailbmicalculator.vercel.app/"><button className="fancy-button">View</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
