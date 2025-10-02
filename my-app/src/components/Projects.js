import React from "react";
import "./Projects.css";
import sweImage from "./swe.png";
import hftImage from "./hft.jpeg";
import cvImage from "./cv.jpg";
import sentimentImage from "./sentiment_analysis.png";
import cnnImage from "./cnn.png";
import Senior_design from "./Senior_design.JPG";
import BuyMeCoffeeBlue from "./BuyMeCoffeeBlue.png";
import agent_proj from "./agent-project.png";


const Projects = () => {
  const papers = [
    {
      title:
      "CFO AI-Agent Assistant",
      role: "Developer",
      details: "Built Frontend UX + Backend Agent and RAG to guide decision making of the company",
      skills: "Python, Streamlit, Langchain, Agents, Prompt Engineering",
      image: agent_proj, // put your image in public/images/
    },
    {
        title:
        "Elderly Homes Health Tracking System ",
        role: "Senior Design project (Won Best Presentation)",
        details: "Built full-stack health-tracking system using embedded C, python and real-time data transmissions",
        skills: "Firmware, Python, C, MongoDB",
        image: Senior_design, // put your image in public/images/
      },
    {
      title:
      "Society of Women Engineers",
      role: "Team Technical: Machine Learning Project Lead ",
      details: "Led the Machine Learning Team to create a Regression Model to estimate Job Wall Time for Caterpillar.",
      skills: "Machine Learning, Python",
      image: sweImage, // put your image in public/images/
    },
    {
        title:
        "Pixel Playground: CartoonifyMe",
        role: "Computer Vision Class Project",
        details: "Using Cartoon-GANs to cartoonlike images of celebrities using the celebA dataset.",
        skills: "Python, Machine Learning",
        image: cvImage, // put your image in public/images/
      },
      {
        title:
        "BuyMeCoffee",
        role: "Website Development Class Project",
        details: "Developed a multi-tiered web app for startup investors to meet those who want to start a company.",
        skills: "Python, MongoDB",
        image: BuyMeCoffeeBlue, // put your image in public/images/
      },
      {
        title:
        "Sentiment Analyzer",
        role: "Computational Linguistics Final Project",
        details: "Implemented a sentiment classifier to categorize texts comparing against 4 different models using the Cornell movie dataset. ",
        skills: "Natural Language Processing, Python",
        image: sentimentImage, // put your image in public/images/
      },
    {
        title:
        "High-Frequency Trading Group Project",
        role: "Group Project for HFT Class",
        details: "Built a web application that mined 64,000+ job opportunities in high-frequency trading",
        skills: "Python,SQL, React, Data Mining",
        image: hftImage, // put your image in public/images/
      },
      {
        title:
        "Verification of CNNs in HLS Using SMT Solvers",
        role: "Advanced Topics in Machine Learning Project",
        details: "Using SMT solvers to ensure that the conversion of Convolution Neural Networks (CNNs) models to accelerators maintains accuracy when using High Level Synthesis. ",
        skills: "Python, Machine Learning, Formal Verification",
        image: cnnImage, // put your image in public/images/
      },
  ];

  return (
    <div className="Projects-container">
      <h2>Projects (non-publication based)</h2>
      <div className="papers-list">
        {papers.map((paper, idx) => (
          <div key={idx} className="paper-card">
            <img
              src={paper.image}
              alt={paper.title}
              className="paper-image"
            />
            <div className="paper-info">
              <h2>{paper.title}</h2>
              <strong>{paper.role}</strong>
              <p>{paper.details}</p>
              <b>Skills: {paper.skills}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;