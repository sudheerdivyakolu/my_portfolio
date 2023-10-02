import React from 'react';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about">
      <div className="profile-picture">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />
      </div>
      <div className="info">
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in
          dignissim leo. Quisque gravida et elit at porttitor.
        </p>
        <div className="personal-info">
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Location:</strong> New York, USA
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
