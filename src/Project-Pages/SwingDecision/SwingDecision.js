// IMPORT STATEMENTS
import { useState  } from "react";
import '../project_styles.css';
// import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
// import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

// Import pictures
import ProjectPicture from "../../Pictures/Project_Cards/Swing-Decision-Analysis.png"

function SwingDecision() {
    const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    // const [open, setOpen] = React.useState(false);
    // const gallerySlides = [
    //     // {src: Pic1, description:"Description"},
    //     // {src: Pic2, description:"Description"},
    // ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Swing Decision Analysis
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={ProjectPicture} alt="Project Card"></img>
                    </div>
                    {/* <div className="Link-Gallery-Container">
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
                    </div> */}
                </div>

                <div className="Project-Text-Container">
                <p>Inspired by a Medium article by the Iowa Baseball Managers that explored <a href="https://medium.com/iowabaseballmanagers/quantifying-swing-decisions-sds-d59ccb84d820" target="_blank" rel="noopener noreferrer" className="hyperlinked">quantifying hitter swing decisions</a>, I set out to apply a similar approach to analyze USC's hitters. In the Swing Decision score, hitters are rewarded for swinging at pitches in the strike zone and penalized for swinging at pitches outside the strike zone.</p>
                
                <p>Following their methodology, I created a series of 4 classification models to predict a pitch's likelihood of being a strike, swing, contact, and hard-hit ball. The variables that went into these models were: Pitch Height, Pitch Side, Pitch Speed, Induced Vertical Break, and Horizontal Break. Through extensive testing, I determined that the Random Forest method produced the most accurate results. Once the models were finalized, I used them in conjunction with the formula outlined by the Iowa Baseball Managers to calculate a Swing Decision score for each pitch. These scores enabled the creation of heatmaps to visualize a hitter's decision-making patterns and provided an aggregate value to evaluate their overall performance.</p>
                
                <p>The Swing Decision score is now leveraged for scouting opposing teams and evaluating potential players in the transfer portal, providing valuable insights into their swing decision-making abilities.</p>
                
                </div>
            </div>
        </div>
      
    );
  }
  
  export default SwingDecision;