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
import ProjectPicture from "../../Pictures/Project_Cards/Minesweeper.png"
import Pic1 from "../../Pictures/Project_Pictures/Minesweeper1.png"
import Pic2 from "../../Pictures/Project_Pictures/Minesweeper2.png"
import Pic3 from "../../Pictures/Project_Pictures/Minesweeper3.png"
import Pic4 from "../../Pictures/Project_Pictures/Minesweeper4.png"

function Minesweeper() {
    const [color, changeColor] = useState("#ffffff");
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
                Minesweeper
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
                    <p>Get ready for the classic puzzle game Minesweeper, now reimagined for mobile! This version brings the timeless gameplay to your phone, making it easier than ever to enjoy the logic-based challenge anytime, anywhere. Navigate a grid of hidden mines, uncover numbers that reveal how many mines surround each space, and use your wits to clear the grid—without hitting any mines! Perfect for puzzle lovers, Minesweeper offers a fast-paced, addictive experience right at your fingertips.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default Minesweeper;