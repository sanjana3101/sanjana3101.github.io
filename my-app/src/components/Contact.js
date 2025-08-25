import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-description">
        If you'd like to get in touch, feel free to reach out via any of the following:
      </p>

      <ul className="contact-list">
        <li>
          Email:{" "}
          <a
            href="mailto:sanjanapingali@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sanjanapingali@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sanjana-pingali-1b06b5216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My LinkedIn Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
