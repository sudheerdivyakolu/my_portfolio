import React from 'react';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description for Project 1',link: 'https://github.com/'},
    { id: 2, title: 'Project 2', description: 'Description for Project 2' },
    { id: 3, title: 'Project 3', description: 'Description for Project 3' },
  ];

  return (
    <div className="portfolio">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <h4><a href={project.link}>visit</a></h4>
        </div>
      ))}
    </div>
  );
};

export default Projects;
