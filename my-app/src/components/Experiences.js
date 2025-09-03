import React from "react";
import "./Publications.css";
import civis from "./civis_2.png";
import UofI from "./UofI.png"
import NCSA from "./NCSA.png"

const Publications = () => {
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
    <div className="publications-container">
      <h2> <strong>Internships </strong></h2>
      <div className="papers-list">
        {Internship.map((paper, idx) => (
          <div key={idx} className="paper-card">
            <img
              src={paper.image}
              alt={paper.title}
              className="paper-image"
            />
            <div className="paper-info">
              <strong>{paper.company}</strong>
              <p>{paper.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h2> <strong> Research </strong></h2>
      <div className="papers-list">
        {research.map((paper, idx) => (
          <div key={idx} className="paper-card">
            <img
              src={paper.image}
              alt={paper.title}
              className="paper-image"
            />
            <div className="paper-info">
              <strong>{paper.company}</strong>
              <p>{paper.title}</p>
            </div>
          </div>
        ))}
      </div>
      <h2> <strong>Teaching Positions </strong></h2>
      <div className="papers-list">
        {teaching.map((paper, idx) => (
          <div key={idx} className="paper-card">
            <img
              src={paper.image}
              alt={paper.title}
              className="paper-image"
            />
            <div className="paper-info">
              <strong>{paper.course}</strong>
              <p>{paper.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;