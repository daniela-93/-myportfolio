import React from "react";

const Resume = () => {
  return (
    <div className="proficieny-list">
      <a
        href="https://docs.google.com/document/d/1ykudWC5lWbMkzHNNRofgPDmEInuKuu1zvv0bRMkyxjA/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
        download
      >
        Download Resume
      </a>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>Javascript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>JQuery</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>MySQL</li>
        <li>Node.js</li>
        <li>Express</li>
    
      </ul>
      <ul>
<h3>Contact Info</h3> 
        <li>
          email:<email>daniela.acuna93@gmail.com</email>
        </li>
        <li>Phone Number: 512-801-3403</li>
      </ul>
    </div>
  );
};

export default Resume;