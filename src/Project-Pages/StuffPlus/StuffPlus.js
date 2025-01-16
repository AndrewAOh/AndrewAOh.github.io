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
import ProjectPicture from "../../Pictures/Project_Cards/Stuff+.png"
import Pic1 from "../../Pictures/Project_Pictures/Stuff1.png"
import Pic2 from "../../Pictures/Project_Pictures/Stuff2.png"
import Pic3 from "../../Pictures/Project_Pictures/Stuff3.png"
import Pic4 from "../../Pictures/Project_Pictures/Stuff4.png"
import Pic5 from "../../Pictures/Project_Pictures/Stuff5.png"

function StuffPlus() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Stuff+ Classification Model Results"},
        {src: Pic2, description:"NCAA Fastball Stuff+ Leaders"},
        {src: Pic3, description:"NCAA Slider Stuff+ Leaders"},
        {src: Pic4, description:"NCAA ChangeUp Stuff+ Leaders"},
        {src: Pic5, description:"NCAA Curveball Stuff+ Leaders"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Stuff+
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={ProjectPicture} alt="Project Picture"></img>
                    </div>
                    <div className="Link-Gallery-Container">
                        <div className="Gallery-Container">
                            <button className="Gallery-Button" type="button" onClick={() => setOpen(true)}>
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
                    <p> Stuff+ rating is a metric widely used in baseball analytics to evaluate the quality and "nastiness" of a pitch. Stuff+ provides insight into a pitcher’s pitch arsenal by measuring the physical characteristics of each pitch, such as velocity, spin rate, and movement. A higher Stuff+ rating correlates strongly with a pitch's ability to generate whiffs and deceive hitters, making it an essential tool for understanding pitching effectiveness.</p>

                    <p>To develop the Stuff+ rating and model, I utilized an XGBoost classification algorithm trained on college baseball pitch data from 2022-2024. Since Stuff+ evaluates a pitch's ability to produce positive outcomes based on its physical characteristics, I used each pitch's attributes as the independent variables. The target variable was a binary indicator representing whether the pitch resulted in a positive outcome. Following hyperparameter tuning using Optuna, the model achieved a F1-score accuracy of 71%, reflecting its ability to accurately classify and predict pitch performance. This rating system allows for nuanced evaluations of each pitch within a pitcher’s arsenal, providing actionable insights.</p>

                    <p>The Stuff+ rating is now a cornerstone of the team’s analytics workflow. It is incorporated into daily pitcher reports to monitor performance, utilized in opposing team scouting reports to identify potential weaknesses, and applied to player evaluations in the transfer portal. By offering a detailed and objective measure of pitch quality, the Stuff+ model enhances strategic decision-making and strengthens competitive advantage.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default StuffPlus;