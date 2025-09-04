import React from "react";
import "./Experiences.css";
import civis from "./civis_2.png";
import UofI from "./UofI.png"
import NCSA from "./NCSA.png"

const Experiences = () => {
  const Internship = [
    {
      title:
        "Software Engineer Internship",
      company: "Civis Analytics",
      image: civis
    }
  ];

  const research = [
    {
        title:
          "Graduate Researcher",
        company: "University of Illinois Urbana-Champaign",
        image:  UofI
      },
    {
        title:
          "Undergraduate Researcher",
        company: "NCSA: Big Data in Environmental Economics and Policy",
        image: NCSA
      },
    {
        title:
          "Systems Developer",
        company: "Forward Data Lab",
        image: UofI
      },
    {
        title:
          "Undergraduate Researcher",
        company: "NCSA: Center for Exascale Enabled Scramjet Design",
        image: NCSA
      },
    {
      title:
        "Undergraduate Researcher",
      company: "PURE Research Program",
      image: UofI
    }
  ];

  const teaching = [
    {
      title:
        "Graduate Teaching Assistant",
      course: "Senior Design",
      image: UofI
    },
    {
        title:
          "Undergraduate Course Assistant",
        course: "Digital Systems Laboratory",
        image: UofI
      }
  ];

  return (
    <div className="experiences-container">
      <h2> <strong>Internships </strong></h2>
      <div className="experiencess-list">
        {Internship.map((experiences, idx) => (
          <div key={idx} className="experiences-card">
            <img
              src={experiences.image}
              alt={experiences.title}
              className="experiences-image"
            />
            <div className="experiences-info">
              <strong>{experiences.company}</strong>
              <p>{experiences.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h2> <strong> Research </strong></h2>
      <div className="experiencess-list">
        {research.map((experiences, idx) => (
          <div key={idx} className="experiences-card">
            <img
              src={experiences.image}
              alt={experiences.title}
              className="experiences-image"
            />
            <div className="experiences-info">
              <strong>{experiences.company}</strong>
              <p>{experiences.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h2> <strong>Teaching Positions </strong></h2>
      <div className="experiencess-list">
        {teaching.map((experiences, idx) => (
          <div key={idx} className="experiences-card">
            <img
              src={experiences.image}
              alt={experiences.title}
              className="experiences-image"
            />
            <div className="experiences-info">
              <strong>{experiences.course}</strong>
              <p>{experiences.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;