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
import ProjectPicture from "../../Pictures/Project_Cards/Pitch-Type-Identification.png"
import Pic1 from "../../Pictures/Project_Pictures/PitchType1.png"

function PitchType() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Pitch Type Multi-Classification Model Results"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Baseball Pitch Type Identification
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
                    <p> In college baseball, each team typically employs its own method for identifying and classifying pitch types, which can lead to inconsistencies and inaccuracies in the data. The goal of this project was to develop a machine learning model to reclassify pitch events in a way that aligns with our team's classification standards, while also correcting any misclassifications from other teams. This ensures the data is consistent and reliable for further analysis and modeling.</p>

                    <p> I built a machine learning model in Jupyter Notebook to classify pitches based on key metrics such as speed, spin rate, movement, and spin axis. To address class imbalance, I applied a weighted undersampling technique, and utilized a Random Forest Classifier to reduce overfitting. The model achieved a test accuracy of 95%, outperforming Trackman’s standard automatic pitch identifier.</p>

                    <p>The model was implemented into a program designed to clean datasets and generate precise scouting reports on opposing teams, tailored to the specific needs of our analysis. This solution significantly enhances the quality and consistency of pitch data, enabling more accurate evaluations and strategic decisions.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default PitchType;