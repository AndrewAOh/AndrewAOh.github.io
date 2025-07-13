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
import ProjectPicture from "../../Pictures/Project_Cards/Player-Report-Dashboard-App.png"
import Pic1 from "../../Pictures/Project_Pictures/DailyReport1.png"
import Pic2 from "../../Pictures/Project_Pictures/DailyReport2.png"
import Pic3 from "../../Pictures/Project_Pictures/DailyReport3.png"
import Pic4 from "../../Pictures/Project_Pictures/DailyReport4.png"
import Pic5 from "../../Pictures/Project_Pictures/DailyReport5.png"
import Pic6 from "../../Pictures/Project_Pictures/DailyReport6.png"

function PlayerReport() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Bullpen Reports Home Page"},
        {src: Pic2, description:"Bullpen Reports Pitcher Leaderboard"},
        {src: Pic3, description:"Daily Bullpen Reports"},
        {src: Pic4, description:"Daily Reports Home Page"},
        {src: Pic5, description:"Daily Reports Hitter Leaderboard"},
        {src: Pic6, description:"Daily Hitters Stats"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Player Report Dashboard Application
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
                    <p> I developed a Player Daily Report Dashboard using R and Shiny to enhance accessibility and usability of player performance data for both athletes and coaches. This web-based application replaced the previous spreadsheet-based system, addressing challenges of accessibility, readability, and comprehension. </p>

                    <p> The dashboard provides a comprehensive view of individual player performance, highlighting key metrics, recent trends, and performance visualizations in an intuitive format. It also includes a team-wide leaderboard showcasing various statistics and metrics, enabling easy comparisons and fostering a competitive environment.</p>

                    <p> Deployed as a live website, the app ensures seamless access for players and coaches, streamlining performance evaluation and decision-making processes. This tool has significantly improved the efficiency of analyzing player metrics, allowing for better preparation, strategic planning, and individual development.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default PlayerReport;