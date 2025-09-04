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
      dates: "06/2022 - 08/2022",
      image: civis
    }
  ];

  const research = [
    {
        title:
          "Graduate Researcher",
        company: "University of Illinois Urbana-Champaign",
        dates:"08/2023 - 07/2025",
        image:  UofI
      },
    {
        title:
          "Undergraduate Researcher",
        company: "NCSA: Big Data in Environmental Economics and Policy",
        dates:"05/2022 - 05/2023",
        image: NCSA
      },
    {
        title:
          "Systems Developer",
        company: "Forward Data Lab",
        dates:"01/2022 - 05/2022",
        image: UofI
      },
    {
        title:
          "Undergraduate Researcher",
        company: "NCSA: Center for Exascale Enabled Scramjet Design",
        dates:"06/2021 - 08/2021",
        image: NCSA
      },
    {
      title:
        "Undergraduate Researcher",
      company: "PURE Research Program",
      dates:"02/2021 - 05/2021",
      image: UofI
    }
  ];

  const teaching = [
    {
      title:
        "Graduate Teaching Assistant",
      course: "Senior Design",
      dates:"08/2023 - 05/2025",
      image: UofI
    },
    {
        title:
          "Undergraduate Course Assistant",
        course: "Digital Systems Laboratory",
        dates:"09/2022 - 05/2023",
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
              <p><b>{experiences.title}</b> </p>
              <p>{experiences.dates}</p>
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
              <p><b>{experiences.title}</b></p> 
              <p>{experiences.dates}</p>
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
              <p> <b>{experiences.title}</b></p>
              <p>{experiences.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;