import React from 'react';
import './Projects.css';
import typingTest from '../assets/typing.jpg';
import quizApp from '../assets/quiz.webp';
import BMI from '../assets/BMI.jpg';
import weatherApp from '../assets/weather.jpg';
import chatApp from '../assets/Chatapp.jpg';
import studentPortal from '../assets/studentPortal.png';
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My <span>Projects</span></h2>
      <div className="projects-scroll-container">
        <div className="projects-grid">
          
          <div className="project-card">
            <a href="https://github.com/Rohail-Tauq/typing-test" target="_blank" rel="noreferrer">
              <button className="project-live-button">view code</button>
            </a>
            <img src={typingTest} alt="Typing Speed Test" className="project-image" />
            <div className="project-content">
              <h3>Typing Speed Test</h3>
              <p>Measure typing speed with live WPM tracking.</p>
              <a href="https://rohailtypingtest.vercel.app/" target="_blank" rel="noreferrer">
                <button className="fancy-button">View</button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/Rohail-Tauq/Quiz-app" target="_blank" rel="noreferrer">
              <button className="project-live-button">view code</button>
            </a>
            <img src={quizApp} alt="Quiz App" className="project-image" />
            <div className="project-content">
              <h3>Quiz App</h3>
              <p>A basic quiz app for practice.</p>
              <a href="https://rohailquiz.vercel.app/" target="_blank" rel="noreferrer">
                <button className="fancy-button">View</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://github.com/Rohail-Tauq/chat-app" target="_blank" rel="noreferrer">
              <button className="project-live-button">view code</button>
            </a>
            <img src={chatApp} alt="Chat-app" className="project-image" />
            <div className="project-content">
              <h3>Chat-app</h3>
              <p>Global chatapp using firebase as database</p>
              <a href="https://rohailchatapp.vercel.app/" target="_blank" rel="noreferrer">
                <button className="fancy-button">View</button>
              </a>
            </div>
          </div>
          <div className="project-card">
            <a href="https://github.com/Rohail-Tauq/Weather-Forecast" target="_blank" rel="noreferrer">
              <button className="project-live-button">view code</button>
            </a>
            <img src={weatherApp} alt="Weather App" className="project-image" />
            <div className="project-content">
              <h3>Weather App</h3>
              <p>Live weather using OpenWeather API.</p>
              <a href="https://rohailweatherforecast.vercel.app/" target="_blank" rel="noreferrer">
                <button className="fancy-button">View</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://github.com/Rohail-Tauq/BMI-Calculator" target="_blank" rel="noreferrer">
              <button className="project-live-button">view code</button>
            </a>
            <img src={BMI} alt="BMI Calculator" className="project-image" />
            <div className="project-content">
              <h3>BMI Calculator</h3>
              <p>BMI calculation of Metric and Imperial categories.</p>
              <a href="https://rohailbmicalculator.vercel.app/" target="_blank" rel="noreferrer">
                <button className="fancy-button">View</button>
              </a>
            </div>
          </div>

          <div className="project-card">
            <a href="https://github.com/Rohail-Tauq/student-portal" target="_blank" rel="noreferrer">
              <button className="project-live-button">view code</button>
            </a>
            <img src={studentPortal} alt="Quiz App" className="project-image" />
            <div className="project-content">
              <h3>Student Portal</h3>
              <p>Student portal where admin can create teacher and student accounts and assign classes.</p>
              <a href="https://rohailstudentportal.vercel.app/" target="_blank" rel="noreferrer">
                <button className="fancy-button">View</button>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
