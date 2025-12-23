// IMPORT STATEMENTS
import React, { useState  } from "react";
import '../project_styles.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// Import pictures
import ProjectPicture from "../../Pictures/Project_Cards/Location+.png"
import Pic1 from "../../Pictures/Project_Pictures/Location1.png"
import Pic2 from "../../Pictures/Project_Pictures/Location2.png"
import Pic3 from "../../Pictures/Project_Pictures/Location3.png"

function LocationPlus() {
    const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Fastball Location+ Regression Model Results"},
        {src: Pic2, description:"Offspeed Location+ Regression Model Results"},
        {src: Pic3, description:"Breaking Ball Location+ Regression Model Results"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Location+
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
                    <p>The Location+ rating is a key metric in baseball analytics used to assess a pitcher's ability to locate pitches effectively. It provides valuable insight into a pitcher’s accuracy by analyzing the placement of each pitch relative to the count and game context. A higher Location+ rating is strongly associated with a pitcher's ability to generate strikes and induce weak contact, making it an essential tool for evaluating pitching performance and effectiveness. The goal was to generate a relative Location+ rating for each pitch in a pitcher's arsenal. </p>

                    <p>To develop the Location+ rating and model, I utilized an XGBoost regression algorithm trained on college baseball pitch data from 2022-2024. Since Location+ evaluates a pitch's ability to produce positive outcomes based on its location and count contex, I used each pitch's location as the independent variables. The target variable was a Run Value which estimates how many runs a specific event is expected to add or subtract from a game. To ensure accurate comparisons across different pitch types, I created separate Location+ models for each pitch type category: Fastballs, Offspeed pitches, and Breaking Balls. This approach allowed for tailored evaluations of pitch effectiveness within each unique bucket.</p>

                    <p>The Location+ rating is now a cornerstone of the team’s analytics workflow. It is incorporated into daily pitcher reports to monitor performance, utilized in opposing team scouting reports, and applied to player evaluations in the transfer portal. By offering a detailed and objective measure of a pitcher's ability to put pitches in the right place, the Location+ model enhances strategic decision-making and strengthens competitive advantage.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default LocationPlus;