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
import ProjectPicture from "../../Pictures/Project_Cards/BeachPlease.png"
import Pic1 from "../../Pictures/Project_Pictures/BeachPlease1.png"
import Pic2 from "../../Pictures/Project_Pictures/BeachPlease2.png"
import Pic3 from "../../Pictures/Project_Pictures/BeachPlease3.png"
import Pic4 from "../../Pictures/Project_Pictures/BeachPlease4.png"

function BeachPlease() {
    const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1},
        {src: Pic2},
        {src: Pic3},
        {src: Pic4},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                BeachPlease
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={ProjectPicture} alt="Project Picture"></img>
                    </div>
                    <div className="TextNote">
                        <i> Group Project w/ 2 Others</i>
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
                    <p> BeachPlease is a mobile app that allows users to discover nearby beaches, providing them with real-time conditions, daily forecasts, and user reviews with ratings and photos. Users can filter by preferences, tag beaches by activities, and manage their profiles. </p>

                    <p>With international tourism on the rise every year, there is growing demand for a convenient app that simplifies the process of finding a quality beach nearby. Even among locals, there is a desire to explore other beaches around one’s area. The BeachPlease mobile app is designed to meet these rising needs. In coastal regions, visitors often seek information about nearby beaches, including real-time conditions, available activities, and  reviews. Currently, there are few applications that offer this information, along with community features like reviews and activity tags. The BeachPlease app addresses this gap by providing an all-in-one solution, enabling users to find the best beach for them.</p>
                
                    <b>Key Features:</b>
                    <ol>
                        <li>
                            <b>Beach Information: </b>
                            <span>Displaying nearby beaches on a map with real-time information, including weather, temperature, and wave height.</span>
                        </li>
                        <li>
                            <b>Beach Activities: </b>
                            <span>Enabling users to tag beaches with specific activities (e.g., swimming, surfing) and filter their beach search based on these tags.</span>
                        </li>
                        <li>
                            <b>Beach Reviews: </b>
                            <span>Allowing users to leave reviews, rate beaches, and upload photos, while viewing the average star ratings and user comments for each beach.</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default BeachPlease;