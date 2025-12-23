import './App.css';

// Header and Footer
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

// Main Pages
import Home from "../Home/Home"
import About from "../About/About"
import Projects from "../Projects/Projects"
import Experience from "../Experience/Experience"

// Project Pages -- Software
import RMPHelper from "../Project-Pages/RMPHelper/RMPHelper"
import BeachPlease from "../Project-Pages/BeachPlease/BeachPlease"
import CaleCafe from "../Project-Pages/Cale-Cafe/Cale-Cafe"
import JoesStocks from "../Project-Pages/JoesStocks/JoesStocks"
import Minesweeper from "../Project-Pages/Minesweeper/Minesweeper"
import PostExchange from "../Project-Pages/PostExchange/PostExchange"

// Project Pages -- Data
import HitterProjection from "../Project-Pages/HittingProjection/HittingProjection"
import ChemicalReaction from "../Project-Pages/ChemicalReaction/ChemicalReaction"
import NBAPred from "../Project-Pages/NBAPred/NBAPred"
import LocationPlus from "../Project-Pages/LocationPlus/LocationPlus"
import StuffPlus from "../Project-Pages/StuffPlus/StuffPlus"
import PitchType from "../Project-Pages/PitchType/PitchType"
import PlayerReport from "../Project-Pages/PlayerReport/PlayerReport"
import ScoutingReport from "../Project-Pages/ScoutingReport/ScoutingReport"
import SwingDecision from "../Project-Pages/SwingDecision/SwingDecision"
import TransferPortal from "../Project-Pages/TransferPortal/TransferPortal"
import LifeScience from "../Project-Pages/LifeScience/LifeScience"
import CineScore from "../Project-Pages/CineScore/CineScore"

// React Imports
// import ReactDOM from "react-dom/client";
import { useEffect } from 'react';
import {
  Routes, 
  Route,
  // Link,
  BrowserRouter as Router,
  useLocation
} from "react-router-dom";

// Import PostHog
// import posthog from 'posthog-js'
// import { PostHogProvider } from 'posthog-js/react'

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeToTitleMap = {
      '/': 'Andrew Oh | Home',
      '/about': 'Andrew Oh | About',
      '/projects': 'Andrew Oh | Projects',
      '/experiences': 'Andrew Oh | Experiences',

      '/projects/Post-Exchange': 'Andrew Oh | Projects',
      '/projects/Minesweeper': 'Andrew Oh | Projects',
      '/projects/JoesStocks': 'Andrew Oh | Projects',
      '/projects/The-Cale-Cafe': 'Andrew Oh | Projects',
      '/projects/RMP-Grade-Helper': 'Andrew Oh | Projects',
      '/projects/Beach-Please': 'Andrew Oh | Projects',
      '/projects/Advanced-Hitter-Projections': 'Andrew Oh | Projects',
      '/projects/Transfer-Portal-Analysis': 'Andrew Oh | Projects',
      '/projects/NBA-Game-Outcome-Projection': 'Andrew Oh | Projects',
      '/projects/Player-Report-Dashboard': 'Andrew Oh | Projects',
      '/projects/Pitch-Type-Identification': 'Andrew Oh | Projects',
      '/projects/Pitcher-Stuff+': 'Andrew Oh | Projects',
      '/projects/Pitcher-Location+': 'Andrew Oh | Projects',
      '/projects/Scouting-Report-Data-Dashboard': 'Andrew Oh | Projects',
      '/projects/Swing-Decision-Analysis': 'Andrew Oh | Projects',
      '/projects/projects/Chemical-Reaction-Component-Recognition': 'Andrew Oh | Projects',
      '/projects/projects/GenAI-LifeScience-Recognition': 'Andrew Oh | Projects',
      '/projects/projects/CineScore': 'Andrew Oh | Projects',
    };

    const title = routeToTitleMap[location.pathname] || 'Andrew Oh';
    document.title = title;
  }, [location]);
};

function App() {
  usePageTitle();

  return (
    <div className="App">
      <Header/>
      <div className="Content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Experiences" element={<Experience />} />

          {/* Project Pages | Software */}
          <Route path="/Projects/RMP-Grade-Helper" element={<RMPHelper />} />
          <Route path="/Projects/Post-Exchange" element={<PostExchange />} />
          <Route path="/Projects/JoesStocks" element={<JoesStocks />} />
          <Route path="/Projects/The-Cale-Cafe" element={<CaleCafe />} />
          <Route path="/Projects/Minesweeper" element={<Minesweeper />} />
          <Route path="/Projects/Beach-Please" element={<BeachPlease />} />

          {/* Project Pages | Data */}
          <Route path="/Projects/Chemical-Reaction-Component-Recognition" element={<ChemicalReaction />} />
          <Route path="/Projects/Advanced-Hitter-Projections" element={<HitterProjection />} />
          <Route path="/Projects/Transfer-Portal-Analysis" element={<TransferPortal />} />
          <Route path="/Projects/NBA-Game-Outcome-Projection" element={<NBAPred />} />
          <Route path="/Projects/Player-Report-Dashboard" element={<PlayerReport />} />
          <Route path="/Projects/Pitch-Type-Identification" element={<PitchType />} />
          <Route path="/Projects/Pitcher-Stuff+" element={<StuffPlus />} />
          <Route path="/Projects/Pitcher-Location+" element={<LocationPlus />} />
          <Route path="/Projects/Scouting-Report-Data-Dashboard" element={<ScoutingReport />} />
          <Route path="/Projects/Swing-Decision-Analysis" element={<SwingDecision />} />
          <Route path="/Projects/CineScore" element={<CineScore />} />
          <Route path="/Projects/GenAI-LifeScience-Recognition" element={<LifeScience />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
