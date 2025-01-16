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
import ProjectPicture from "../../Pictures/Project_Cards/Cale-Cafe.png"
import Pic1 from "../../Pictures/Project_Pictures/CaleCafe1.png"
import Pic2 from "../../Pictures/Project_Pictures/CaleCafe2.png"
import Pic3 from "../../Pictures/Project_Pictures/CaleCafe3.png"

function CaleCafe() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1},
        {src: Pic2},
        {src: Pic3},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                The Cale Cafe
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
                    <p> 
                    Welcome to The Cale Cafe, a vibrant food blog and café-inspired website designed to bring the 
                    charm of my friend's "The Cale Cafe" Instagram page to a broader, more interactive platform. This site is 
                    your one-stop destination for mouthwatering food photography, cherished moments with friends, and 
                    an extensive collection of delightful recipes—all in a user-friendly, visually engaging experience.
                    </p>

                    <b>Key Features:</b>
                    <ol>
                        <li>
                            <b>Dynamic Photo Galleries: </b>
                            <span>Featuring the Lightbox jQuery plugin, our photo galleries—spanning food, friends, and recipes—come to life. Users can click on images to view enlarged versions or open detailed recipes, creating an immersive browsing experience.</span>
                        </li>
                        <li>
                            <b>Interactive Reservation Form: </b>
                            <span>Visitors can book their spot at The Cale Café through an intuitive reservation form. Once submitted, users are directed to a confirmation page, ensuring a smooth and personalized booking experience.</span>
                        </li>
                        <li>
                            <b>Recipe Hub: </b>
                            <span>Discover a collection of exclusive recipes crafted with love. Each recipe is beautifully presented with images that can be expanded using the Lightbox plugin for easy viewing.</span>
                        </li>
                        <li>
                            <b>Friendship Showcase: </b>
                            <span>Explore the heartwarming "Friends Gallery," celebrating the connections and shared moments that make every meal special.</span>
                        </li>
                    </ol>

                    
                </div>
            </div>
        </div>
      
    );
  }
  
  export default CaleCafe;