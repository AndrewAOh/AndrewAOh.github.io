// IMPORT STATEMENTS
// import * as React from "react";
import './Home.css';
import Carousel from '../Components/Carousel/Carousel'
import Wordmark from "../Pictures/Andrew_Oh.png"
import React, { useState, useEffect  } from "react";
import { TypeAnimation } from 'react-type-animation';

// Pictures

function Home() {
    const [color, changeColor] = useState("#333333");
    document.body.style.backgroundColor = color;

    const descripter_list = [
        "Data Scientist", 1500,
        "USC Trojan", 1500,
        "Live to Eat", 1500,
        "Aspiring Cook", 1500,
        "Sports Enthusiast", 1500,
        "Chicken Connoisseur", 1500,
        "Aspiring Golfer", 1500,
        "Baseball Data Analyst", 1500,
        "Software Engineer", 1500,
        "Mobile Gamer", 1500,
        "Ohio State Buckeye Fan", 1500,
        "Web Developer", 1500,
    ]

    return (
        <div className="Home-Container">
            <div className="Home-Picture-Container">
                <img src={Wordmark}></img>
            </div>

            <div className="Home-Text-Container">
                <div className="Home-Sentence-Container">
                    {/* <p>Driving impactful insights and changes through data solutions.</p> */}
                    <p>Transforming data into powerful insights and impactful solutions.</p>
                    {/* <p>Developing Data-Driven Solutions To Derive Meaningful Insights and Create Impactful Change.</p> */}
                    {/* <TypeAnimation sequence={["Developing Data-Driven Solutions", 1000]} speed={45} cursor={false}></TypeAnimation> */}
                </div>
                <div className="Home-Descriptors-Container">
                <TypeAnimation sequence={descripter_list} speed={45} deletionSpeed={60} repeat={Infinity} cursor={true} preRenderFirstString={false}></TypeAnimation>
                </div>
            </div>

            
            
        </div>
      
    );
  }
  
  export default Home;