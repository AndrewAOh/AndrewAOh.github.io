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
import ProjectPicture from "../../Pictures/Project_Cards/NBA-Game-Outcome-Projection.png"
import Pic1 from "../../Pictures/Project_Pictures/NBA1.png"
import Pic2 from "../../Pictures/Project_Pictures/NBA2.png"
import Pic3 from "../../Pictures/Project_Pictures/NBA3.png"

function NBAPred() {
    const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"2024 Season Year-to-Date Results"},
        {src: Pic2, description:"Regression Model Accuracy"},
        {src: Pic3, description:"Classification Model Accuracy"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                NBA Game Outcome Projection
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
                    <p> In this project, I developed machine learning models to predict point totals in NBA games, aiming to outperform Vegas over/under lines and achieve an accuracy exceeding the break-even threshold of 53%. The dataset was constructed by web scraping team statistics from NBA.com and game results from ESPN.com, focusing on post-COVID NBA games from the 2020-21 to 2023-24 seasons. By using overall team statistics, I ensured the predictions remained robust and applicable over time.</p>
                    <span>Two models were created for this purpose:</span>
                    <ol>
                        <li><b>XGBoost Regressor </b>- Designed to minimize the root mean squared error (RMSE) between predicted and actual total points scored.</li>
                        <li><b>XGBoost Classifier </b>- Built to classify games based on whether the total points would exceed or fall below the Vegas line.</li>
                    </ol>

                    <p>The model's performance was evaluated on the 2024-2025 NBA season data. As of December 21, 2024 the regression model achieved an accuracy of 56.76%, surpassing the break-even mark. The model's performance, theoretically, translates to a 1.08x return on investment (ROI) using a flat betting approach. Additionally, employing the Kelly Criterion formula could increase the ROI to 1.20x, making it a valuable tool for predicting game outcomes and betting strategies.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default NBAPred;