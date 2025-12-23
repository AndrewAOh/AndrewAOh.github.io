// import React, { useState } from "react";
import "./WorkCard.css";

function WorkCard({ id, link, company, logo, position, dates, bgColor }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`work-card-link`}
    > 
      <div className="work-card"
      >
        <div className="work-title" style={{ backgroundColor: bgColor }}>
          {company}
        </div>
        <div className="work-logo">
          <img src={logo} alt={`${company} logo`} />
        </div>
        <div className="work-content">
          <h3 className="work-position">{position}</h3>
          <p className="work-dates">{dates}</p>
        </div>
      </div>
    </a>
  );
}

export default WorkCard;