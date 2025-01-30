import React from 'react';
import './Projects.css';
import IMCO from '../assets/logoco.png';
import UTPL from '../assets/logoutpl.png';
import MEDI from '../assets/medi.png';


const projects = [
  {
    name: 'Coffee Shop',
    image: IMCO,
    description: 'I developed CoffeeHub, an intuitive web application for coffee shops that enhances customer experience and business management. Built with React for a dynamic interface, API integration for real-time orders, and a responsive design using CSS and Bootstrap. Boosting efficiency and customer satisfaction!',
    link: 'http://emporiolojano.com/'
  },
  {
    name: 'EVA UTPL',
    image: UTPL,
    description: 'Application of virtual learning environment created for distance students for the Universidad Técnica Particular de Loja',
    link: 'https://www.utpl.edu.ec/'
  },
  {
    name: 'Medical appoinments',
    image: MEDI,
    description: 'The medical appointment app I created allows patients to easily schedule, reschedule, and cancel appointments, view the doctor’s real-time availability, and receive notifications about their appointments. Patients can also manage their medical history. Doctors have access to an admin panel where they can organize their schedule and keep updated records of each consultation.',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>Experience</h2>
      {projects.map((project, index) => (
        <div key={index} className="card">
          <img src={project.image} alt={project.name} />
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Check the project</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
