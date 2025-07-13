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
import ProjectPicture from "../../Pictures/Project_Cards/Transfer-Portal-Analysis.png"
import Pic1 from "../../Pictures/Project_Pictures/Transfer1.png"
import Pic2 from "../../Pictures/Project_Pictures/Transfer2.png"

function TransferPortal() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Transfer Portal Metric Analysis - Hitters"},
        {src: Pic2, description:"Transfer Portal Metric Analysis — Pitchers"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Transfer Portal Analysis
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
                    <p> I spearheaded a Python data scraping project that processed over 2 million rows of data, extracting player names and relevant performance metrics from an online source. This approach significantly streamlined the analysis process, eliminating the need for hundreds of hours spent manually searching the web for player information. By leveraging 19 machine learning models, most with accuracies above 80%, I transformed raw data into actionable advanced metrics, providing coaches with fast, reliable insights on over 2,500 players.</p>

                    <p>The resulting metrics were thoroughly analyzed to create detailed recommendations for the coaching staff. These recommendations helped prioritize player selection and recruitment, ensuring that the coaching team could make data-driven decisions rather than relying solely on subjective assessments. The automated scraping and analysis process allowed for quicker and more efficient processing of the transfer portal, enabling the team to stay ahead of competition and optimize player recruitment.</p>

                    <p> Overall, this project enhanced the team's ability to make faster, more informed decisions, improving the player selection process and ultimately contributing to stronger team development.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default TransferPortal;