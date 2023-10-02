import React from 'react';
import '../styles/experience.css';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience Section</h2>
      <div className="job-info">
        <h3>Software Engineer</h3>
        <p>Company XYZ</p>
        <p className="year">Year: 2019 - Present</p>
        <div className="responsibilities">
          <p>Responsibilities:</p>
          <ul>
            <li>Developed web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams for project delivery.</li>
          </ul>
        </div>
      </div>
      <div className="job-info">
        <h3>Intern</h3>
        <p>Company ABC</p>
        <p className="year">Year: 2018</p>
        <div className="responsibilities">
          <p>Responsibilities:</p>
          <ul>
            <li>Assisted in developing and testing software components.</li>
            <li>Participated in team meetings and project discussions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
