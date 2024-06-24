// src/components/Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="cards-container">
        <div className="card">
          <h3>Software Engineer at XYZ Corp</h3>
          <p>Developed backend services and APIs for various applications.</p>
        </div>
        <div className="card">
          <h3>Ethical Hacker at SecureTech</h3>
          <p>Conducted security assessments and penetration tests.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
