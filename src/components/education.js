import React from 'react';
import '../styles/education.css';

const Education = () => {
  return (
    <div className="education">
      <h2>Education Section</h2>
      <div className="degree-info">
        <h3>Degree in Computer Science</h3>
        <p>University of XYZ</p>
        <p className="year">Year: 2015 - 2019</p>
      </div>
      <div className="degree-info">
        <h3>High School Diploma</h3>
        <p>ABC High School</p>
        <p className="year">Year: 2015</p>
      </div>
    </div>
  );
};

export default Education;
