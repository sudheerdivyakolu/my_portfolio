import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../styles/home.css';

const Home = () =>{
  return (
    <div className="home">
      <div className="intro">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hi there! Im Sudheer, a passionate developer ready to conquer the world
          of tech.
        </p>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Home;
