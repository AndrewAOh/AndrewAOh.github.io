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
import RMP from "../../Pictures/Project_Cards/RMP.png"
import RMP1 from "../../Pictures/Project_Pictures/RMP1.jpg"
import RMP2 from "../../Pictures/Project_Pictures/RMP2.jpg"
import RMP3 from "../../Pictures/Project_Pictures/RMP3.jpg"
import RMP4 from "../../Pictures/Project_Pictures/RMP4.jpg"

function RMPHelper() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: RMP1},
        {src: RMP2},
        {src: RMP3},
        {src: RMP4},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                RateMyProfessor Grade Helper
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={RMP} alt="Project Picture"></img>
                    </div>
                    <div className="Link-Gallery-Container">
                        <div className="Link-Container">
                            <button 
                                className="Link-Button" 
                                onClick={() => window.open("https://chromewebstore.google.com/detail/rmp-grade-helper/dgblfliiapggebfnmdihgohikalomgfo", "_blank")}
                                style={{cursor: 'pointer'}}
                            >
                                Link
                            </button>
                        </div>
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
                    <p> 
                    View a professor's grade distribution on RateMyProfessor, showing the grades received in each course.
                    </p>

                    <p>Elevate your academic success effortlessly and instantly. Gain valuable insights into your potential 
                        courses by accessing grade distributions directly in RateMyProfessor. With just a few clicks, 
                        explore a professor's teaching history and uncover the breakdown of grades awarded in each course 
                        they've instructed. Empower yourself with the knowledge to schedule your classes with confidence 
                        and achieve academic success.
                    </p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default RMPHelper;