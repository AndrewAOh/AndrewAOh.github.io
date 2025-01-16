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
import ProjectPicture from "../../Pictures/Project_Cards/advanced-hitter-pred-card.png"
import Pic1 from "../../Pictures/Project_Pictures/HitterProj1.png"

function HittingProjection() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Performance of Expected Statistics vs Actual Results"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Advanced Hitter Projections
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
                    <p> In this project, I developed a set of machine learning models to predict future player performances by analyzing preseason datasets. By applying advanced statistical methods, I generated expected outcomes that were used to forecast performance trends for our players. </p>

                    <p> I created five machine learning classification models, each achieving an accuracy of over 70%, to predict various advanced hitting metrics. The models consistently demonstrated high accuracy, with an average weighted difference between predicted and actual results of less than 2.5% for three key performance metrics (AVG, SLG, OPS). This level of accuracy enabled reliable forecasts and data-driven recommendations.</p>

                    <p> The models were trained on data from the 2022 NCAA College Baseball season, and were specifically applied to preseason data to generate predictions for the upcoming season. These predictions helped coaches guide playing time decisions by providing insights into player readiness and performance potential. By evaluating hitter performance and generating statistical projections, the models enabled coaches to make more informed decisions regarding lineup composition, matchups, and player development.</p>

                    <p> Ultimately, the project enhanced performance forecasting and supported better decision-making, helping coaches optimize team performance and make data-driven playing time decisions for the season ahead.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default HittingProjection;