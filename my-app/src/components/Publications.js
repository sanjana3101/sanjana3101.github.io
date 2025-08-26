import React from "react";
import "./Publications.css";
import paper1Img from "./OpenRTLSet.png";

const Publications = () => {
  const papers = [
    {
      title:
        "OpenRTLSet: A Fully Open-Source Dataset for Large Language Model-based Verilog Module Design",
      details: "pp. 212–218, Jun. 2025",
      authors: "Jinghua Wang∗, Lily Jiaxin Wan∗, Sanjana Pingali∗, Scott Smith∗, Manvi Jha∗,Shalini Sivakumar, Xing Zhao, Kaiwen Cao, Deming Chen",
      doi: "https://doi.org/10.1109/iclad65226.2025.00038",
      image: paper1Img, // put your image in public/images/
    }
  ];

  return (
    <div className="publications-container">
      <h2>Papers Published</h2>
      <div className="papers-list">
        {papers.map((paper, idx) => (
          <div key={idx} className="paper-card">
            <img
              src={paper.image}
              alt={paper.title}
              className="paper-image"
            />
            <div className="paper-info">
              <strong>{paper.title}</strong>
              <p> {paper.authors}</p>
              <p>{paper.details}</p>
              <a href={paper.doi} target="_blank" rel="noopener noreferrer">
                DOI
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
