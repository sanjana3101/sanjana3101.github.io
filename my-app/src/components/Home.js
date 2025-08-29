import React from "react";
import Image from "./Image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import "./Home.css"; // <-- Make sure to import your CSS

const Home = () => {
  const skills = [
    {
      title: "Machine Learning",
      desc: "Large Language Models, Neural Networks, Optimization",
    },
    {
      title: "Software Engineering",
      desc: "Full-stack Development, APIs, Databases",
    },
    {
      title: "Heterogeneous & Embedded",
      desc: "C++ Programming, Low-Latency Systems, GPU, NPU Programming",
    },
  ];

  return (
    <div className="home-container">
      {/* Dark overlay on background */}
      <div className="background-overlay"></div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-text">
          <h1 className="name">Hi, I'm Sanjana Pingali!</h1>
          <p className="description">
            I'm a Master's student in Electrical and Computer Engineering at the
            University of Illinois at Urbana-Champaign.
          </p>
          <p className="description">
            Previously, I completed my Bachelor's degree in Computer Engineering
            at the same university, graduating as a James Scholar and a member
            of the Eta Kappa Nu (HKN) Honor Society. My research interests span
            across Machine Learning & Large Language Models, Software
            Engineering, Heterogeneous Systems and Embedded Computing.
          </p>
        </div>

        {/* Profile Image */}
        <div className="about-image">
          <Image />
        </div>
      </div>

       {/* Contact Section */}
       <section className="contact-section">
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/sanjana-pingali-1b06b5216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sanjanapingali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={40} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=E28EmjEAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGooglescholar size={40} />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills & Research Interests</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
