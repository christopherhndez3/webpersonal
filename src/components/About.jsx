// src/components/About.jsx
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = "Smart Contracts, Web3, Blockchain And Ethical Hacking";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        textRef.current.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
  }, []);

  return (
    <section id="about">
      <video id="background-video" autoPlay loop muted>
        <source src="/src/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h2>Christopher Hernandez</h2>
        <p ref={textRef}></p>
      </div>
    </section>
  );
};

export default About;
