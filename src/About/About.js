// IMPORT STATEMENTS
import { useState  } from "react";
import './About.css';

// Import pictures
import cellPicture from "../Pictures/cell_picture.JPG"

// Import Post Hog
// import { usePostHog } from 'posthog-js/react'

function About() {
    // const posthog = usePostHog();
    const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;
    
    return (
        <div className="About-Page">
            <h1 className="About-Title"> 
                Bio
            </h1>

            <div className="Title-Divider"></div>

            <div className="About-Content">
                <div className="Picture-Container">
                    <img className="About-Picture" src={cellPicture} alt="About Picture"></img>
                </div>

                <div className="About-Text-Container">
                    <p> 
                        Hi! I'm Andrew Oh, a student at the University of Southern California (USC) 
                        studying Computer Science and Business Administration with a minor in Consumer Behavior. 
                        Growing up in Columbus, Ohio, I developed several passions, including data science. 
                    </p>

                    <p>
                        My interest in data science was sparked by my love for baseball. I grew fascinated with how statistics 
                        and metrics shaped the game's outcomes. As I read about biometric analysis, pitch profiles, and 
                        predicted performances, I discovered the power of data to uncover stories and solve problems, inspiring 
                        me to apply this mindset to broader challenges.
                    </p>

                    <p>
                        Since then, I've honed my skills through various projects and work experiences, tackling challenges
                        that combine machine learning, statistical modeling, and data visualization. I've learned to build 
                        predictive models to analyze player performance, developed a textual recognition model tailored to 
                        applications in chemistry, and derived insights to drive smarter decisions. My journey has reinforced 
                        my belief in the transformative power of data, and I'm excited to keep answering meaningful questions 
                        and creating impact.
                    </p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default About;