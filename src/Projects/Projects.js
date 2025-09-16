// IMPORT STATEMENTS
import React, { useState, useEffect  } from "react";
import './Projects.css';
import Carousel from '../Components/Carousel/Carousel'
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

// Import Project Cards -- Data
import HitterPredictions from "../Pictures/Project_Cards/advanced-hitter-pred-card.png"
import CASProject from "../Pictures/Project_Cards/CAS-project.png"
import NBAPred from "../Pictures/Project_Cards/NBA-Game-Outcome-Projection.png"
import LocationPlus from "../Pictures/Project_Cards/Location+.png"
import StuffPlus from "../Pictures/Project_Cards/Stuff+.png"
import PitchType from "../Pictures/Project_Cards/Pitch-Type-Identification.png"
import PlayerReport from "../Pictures/Project_Cards/Player-Report-Dashboard-App.png"
import ScoutingReport from "../Pictures/Project_Cards/Scouting-Report-Data-Dashboard.png"
import SwingDecision from "../Pictures/Project_Cards/Swing-Decision-Analysis.png"
import TransferPortal from "../Pictures/Project_Cards/Transfer-Portal-Analysis.png"

// Import Project Cards -- Software
import BeachPlease from "../Pictures/Project_Cards/BeachPlease.png"
import CaleCafe from "../Pictures/Project_Cards/Cale-Cafe.png"
import JoesStocks from "../Pictures/Project_Cards/JoesStocks.png"
import Minesweeper from "../Pictures/Project_Cards/Minesweeper.png"
import PostExchange from "../Pictures/Project_Cards/PostExchange.png"
import RMP from "../Pictures/Project_Cards/RMP.png"

// Import Post Hog
import { usePostHog } from 'posthog-js/react'

function Projects() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const posthog = usePostHog();

    const dataProjects = [
        { title: "Advanced Hitter Predictions Project", link: "/projects/Advanced-Hitter-Projections", picture: HitterPredictions},
        { title: "Transfer Portal Analysis", link: "/projects/Transfer-Portal-Analysis", picture: TransferPortal},
        { title: "NBA Game Outcome Projection", link: "/projects/NBA-Game-Outcome-Projection", picture: NBAPred},
        { title: "Player Report Dashboard App", link: "/projects/Player-Report-Dashboard", picture: PlayerReport},
        { title: "Pitch Type Identification", link: "/projects/Pitch-Type-Identification", picture: PitchType},
        { title: "Pitcher Stuff+", link: "/projects/Pitcher-Stuff+", picture: StuffPlus},
        { title: "Pitcher Location+", link: "/projects/Pitcher-Location+", picture: LocationPlus},
        { title: "Scouting Report Data Dashboard", link: "/projects/Scouting-Report-Data-Dashboard", picture: ScoutingReport},
        { title: "Swing Decision Analysis", link: "/projects/Swing-Decision-Analysis", picture: SwingDecision},
        { title: "Chemical Reaction Component Recognition", link: "/projects/Chemical-Reaction-Component-Recognition", picture: CASProject},
    ];

    const softwareProjects = [
        { title: "Post Exchange", link: "/projects/Post-Exchange", picture: PostExchange},
        { title: "Minesweeper", link: "/projects/Minesweeper", picture: Minesweeper},
        { title: "JoesStocks", link: "/projects/JoesStocks", picture: JoesStocks},
        { title: "The Cale Cafe", link: "/projects/The-Cale-Cafe", picture: CaleCafe},
        { title: "RMP Grade Helper", link: "/projects/RMP-Grade-Helper", picture: RMP},
        { title: "BeachPlease", link: "/projects/Beach-Please", picture: BeachPlease},
    ]

    // Tab Stuff
    // const [value, setValue] = React.useState(0);
    // State to track the selected tab
    const [selectedTab, setSelectedTab] = useState(0);

    // Handler for tab change
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };


    return (
        <div className="Projects-Page">
            <h1 className="Projects-Title"> Past Projects sds </h1>

            <div className="Title-Divider"></div>

            <div className="Projects-Content-Container">
                <Paper 
                    className="Paper-Container"
                >
                    <Tabs
                        value={selectedTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="inherit"
                        centered
                        TabIndicatorProps={{
                            style: {
                              backgroundColor: '#25afda', // Underline color
                            },
                        }}
                    >
                        <Tab className="Paper-Tab"
                            label="Data Science Projects" 
                            sx={{
                                color: selectedTab === 0 ? '#25afda' : 'inherit',
                                fontSize: '16px',
                                fontFamily: "Inter",
                                fontWeight: selectedTab === 0 ? 'bold' : 'normal'
                            }}
                        />
                        <Tab className="Paper-Tab"
                            label="Software Projects"
                            sx={{
                                color: selectedTab === 1 ? '#25afda' : 'inherit',
                                fontSize: '16px',
                                fontFamily: "Inter",
                                fontWeight: selectedTab === 1 ? 'bold' : 'normal'
                            }}
                        />
                    </Tabs>
                </Paper>
                {selectedTab === 0 && (
                    <div className="Data-Projects-Content-Container">
                        <div className="Projects-Data-Card">
                            <Carousel slides={dataProjects} />
                        </div>
                    </div>
                )}

                {selectedTab === 1 && (
                    <div className="Software-Projects-Content-Container">
                        <div className="Projects-Software-Card">
                            <Carousel slides={softwareProjects} />
                        </div>
                    </div>
                )}

                {/* <div className="Data-Projects-Content-Container">
                    <div className="Data-Projects-Header-Container">
                        <div className="Projects-Data-Header">
                            <h2>Data Science Projects</h2>
                        </div>
                    </div>
                    <div className="Projects-Data-Card">
                        <Carousel slides={dataProjects} />
                    </div>
                </div>

                <div className="Software-Projects-Content-Container">
                    <div className="Software-Projects-Header-Container">
                        <div className="Projects-Software-Header">
                            <h2>Software Projects</h2>
                        </div>
                    </div>
                    <div className="Projects-Software-Card">
                        <Carousel slides={softwareProjects} />
                    </div>
                </div> */}
            </div>
        </div>
      
    );
  }
  
  export default Projects;