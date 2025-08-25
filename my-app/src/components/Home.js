import React from "react";
import Image from "./Image";

const Home = () => {
  const skills = [
    {
      title: "Machine Learning",
      desc: "Large Language Models, Neural Networks, Optimization",
    },
    {
      title: "Software Engineering",
      desc: "Full-stack Development, APIs",
    },
    {
      title: "Heterogeneous & Embedded",
      desc: " GPU, NPU Programming, High-Level Synthesis",
    },
    {
      title: "Data Engineering",
      desc: "Databases, Large-Scale Data Processing",
    },
  ];

  const papers = [
    {
      title:
        "OpenRTLSet: A Fully Open-Source Dataset for Large Language Model-based Verilog Module Design",
      details: "pp. 212–218, Jun. 2025",
      doi: "https://doi.org/10.1109/iclad65226.2025.00038",
    },
  ];

  return (
    <div className="home-container">
      {/* About Section */}
      <div className="about-section">
        {/* About Text */}
        <div className="about-text">
          <h1 className="name">Hi, I'm Sanjana Pingali!</h1>
          <p className="description">
            I'm a Master's student in Electrical and Computer Engineering at the University of Illinois at Urbana-Champaign.
          </p>
          <p className="description">
            Previously, I completed my Bachelor's degree in Computer Engineering at the same university, graduating as a James Scholar and a member of the Eta Kappa Nu (HKN) Honor Society. My research interests span across Machine Learning & Large Language Models, Software Engineering, Heterogeneous Systems and Embedded Computing.
          </p>
        </div>

        {/* Profile Image */}
        <div className="about-image">
          <Image />
        </div>
      </div>

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

      {/* Papers Published */}
      <section className="papers-section">
        <h2>Papers Published</h2>
        <ul className="papers-list">
          {papers.map((paper, idx) => (
            <li key={idx}>
              <strong>{paper.title}</strong>, {paper.details}.{" "}
              <a href={paper.doi} target="_blank" rel="noopener noreferrer">
                DOI
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
