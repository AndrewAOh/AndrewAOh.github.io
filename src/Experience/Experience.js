// IMPORT STATEMENTS
import { useState  } from "react";
import './Experience.css';
import WorkCard from '../Components/WorkCard/WorkCard'


// IMPORT LOGOS
import uscLogo from "../Logo/USC_Baseball_Logo.png"
import casLogo from "../Logo/CAS_Logo.jpeg"
import catharticLogo from "../Logo/Cathartic_Logo.png"

function Experience() {
  const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;
    const workItems = [
        {
          id: 1,
          link: "https://usctrojans.com/sports/baseball",
          company: "USC Athletics",
          logo: uscLogo,
          position: "Head Baseball Data Analyst",
          dates: "Aug 2022 - Present",
          bgColor: "#990000", // Dark red
        },
        {
          id: 2,
          link: "https://www.cas.org/",
          company: "CAS",
          logo: casLogo,
          position: "Data Analytics & Insights Intern",
          dates: "May 2024 - Aug 2024, May 2025 - Aug 2025",
          bgColor: "#00008B", // Dark blue
        },
        {
          id: 3,
          link: "https://www.cathartichealth.org/",
          company: "Cathartic Health",
          logo: catharticLogo,
          position: "Operations Analyst",
          dates: "Feb 2024 - May 2025",
          bgColor: "#331845", // Dark purple
        },
        
      ];

    return (
      <div className="Experience-Page">
        <h1 className="Experience-Title"> 
        Work Experiences
        </h1>

        <div className="Title-Divider"></div>

        <div className="Work-Card-Container">
          {workItems.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>

          
      </div>
      
    );
  }
  
  export default Experience;