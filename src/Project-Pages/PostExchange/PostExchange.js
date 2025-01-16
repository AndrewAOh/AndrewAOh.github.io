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
import ProjectPicture from "../../Pictures/Project_Cards/PostExchange.png"
import Pic1 from "../../Pictures/Project_Pictures/PostExchange1.png"

function PostExchange() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Post Exchange
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={ProjectPicture} alt="Project Picture"></img>
                    </div>
                    <div className="TextNote">
                        <i> Group Project w/ 6 Others</i>
                    </div>
                    <div className="Link-Gallery-Container">
                        <div className="Link-Container">
                            <button 
                                className="Link-Button" 
                                onClick={() => window.open("https://postexchange.icytools.cn/", "_blank")}
                            >
                                Link
                            </button>
                        </div>
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
                    <p> Welcome to PostExchange, a platform where global connections meet the timeless tradition of postcard swapping. Join a vibrant community of postcard enthusiasts from around the world to collect, share, and receive postcards, rediscovering the joy of personal communication and meaningful exchanges. </p>
                    
                    <b>Key Features:</b>
                    <ol>
                        <li>
                            <b>Send Postcards: </b>
                            <span>Choose a friend or fellow enthusiast and send them a special postcard from your collection or surprise someone with a thoughtful postcard sent at random, spreading joy to unexpected places. The choice is yours!</span>
                        </li>
                        <li>
                            <b>Receive Postcards: </b>
                            <span>Sit back and await postcards from other users, adding unique pieces to your personal collection and sharing in the excitement of the exchange.</span>
                        </li>
                        <li>
                            <b>View Global Postcards: </b>
                            <span>Browse postcards from around the world, discovering new cultures and destinations.</span>
                        </li>
                        <li>
                            <b>Real-Time Updates: </b>
                            <span>Stay up to date with what’s happening on PostExchange. See the latest exchanges, new users joining, and postcards being sent in real-time, creating a dynamic and interactive experience.</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default PostExchange;