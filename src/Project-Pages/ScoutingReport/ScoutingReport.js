// IMPORT STATEMENTS
import React, { useState, useEffect  } from "react";
import '../project_styles.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// Import pictures
import ProjectPicture from "../../Pictures/Project_Cards/Scouting-Report-Data-Dashboard.png"
import Pic1 from "../../Pictures/Project_Pictures/Scout3.png"
import Pic2 from "../../Pictures/Project_Pictures/Scout4.png"
import Pic3 from "../../Pictures/Project_Pictures/Scout1.png"
import Pic4 from "../../Pictures/Project_Pictures/Scout2.png"

function ScoutingReport() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Pitcher Scouting Reports"},
        {src: Pic2, description:"Pitcher Scouting Reports"},
        {src: Pic3, description:"Hitting Scouting Reports"},
        {src: Pic4, description:"Hitting Scouting Reports"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Scouting Report Data Dashboard
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={ProjectPicture} alt="Project Picture"></img>
                    </div>
                    <div className="Link-Gallery-Container">
                        <div className="Gallery-Container">
                            <button className="Gallery-Button" type="button" onClick={() => setOpen(true)} style={{cursor: 'pointer'}}>
                                Gallery
                            </button>
                            <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                carousel={{ finite: true }}
                                slides={gallerySlides}
                                plugins={[Thumbnails, Captions]}
                                styles={{
                                    container: {
                                    backgroundColor: "rgba(0, 0, 0, 0.75)", // 50% transparent black
                                    },
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="Project-Text-Container">
                    <p> I co-led the development of a Power BI dashboard designed to visualize key scouting metrics for over 1,300 opposing players. The dashboard featured 60+ metrics and interactive visualizations, transforming over 1,000 rows of raw data into two concise, actionable pages. This tool provided detailed insights to support game preparation, strategic planning, and in-game adjustments.</p>

                    <p> To ensure the dashboard's effectiveness, I researched impactful player statistics and best practices in data visualization, prioritizing clarity and usability. The resulting visualizations enabled coaches and players to quickly assess key performance metrics, enhancing readiness and decision-making.</p>

                    <p> By leveraging Python and SQL for data processing and integrating results into Power BI, the project boosted team performance and contributed to a higher winning percentage by identifying opposing strengths and weaknesses.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default ScoutingReport;