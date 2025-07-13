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
import ProjectPicture from "../../Pictures/Project_Cards/JoesStocks.png"
import Pic1 from "../../Pictures/Project_Pictures/Stocks1.png"
import Pic2 from "../../Pictures/Project_Pictures/Stock2.png"
import Pic3 from "../../Pictures/Project_Pictures/Stock3.png"

function JoesStocks() {
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
                JoesStocks
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
                    <p> Introducing JoesStocks, an interactive platform where users can search for stocks, track their portfolio, and execute buy and sell transactions—all in real-time. Powered by the Finnhub API, this web app offers a seamless and user-friendly experience for those interested in the stock market, whether you're a beginner or a seasoned investor.</p>

                    <b>Key Features:</b>
                    <ol>
                        <li>
                            <b>Stock Search Functionality: </b>
                            <span>Get detailed stock information, including current price, high/low prices, opening/closing prices, and company-specific data like IPO date, market cap, and website.</span>
                        </li>
                        <li>
                            <b>Favorites & Portfolio Management: </b>
                            <span>Track and manage your stock portfolio, view the total account value, cash balance, and current stock holdings with real-time updates.</span>
                        </li>
                        <li>
                            <b>Real-Time Stock Details: </b>
                            <span>View detailed stock information such as high price, low price, open price, close price, market cap, shares outstanding, and company contact info, all directly from the FinnHub API.</span>
                        </li>
                        <li>
                            <b>Buy and Sell Transactions: </b>
                            <span>Enter the number of shares you wish to buy or sell using simple input fields during the US stock market hours (6:30 AM – 1:00 PM PDT). </span>
                        </li>
                    </ol>

                </div>
            </div>
        </div>
      
    );
  }
  
  export default JoesStocks;