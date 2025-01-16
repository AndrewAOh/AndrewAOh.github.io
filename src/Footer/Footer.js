// IMPORT STATEMENTS
import * as React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section social">
                    <h3>See More</h3>
                    <div className="social-links">
                    <a href="https://www.linkedin.com/in/andrewaoh/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={36} title="LinkedIn" />
                        </a>
                        <a href="https://github.com/AndrewAOh" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={36} title="GitHub" />
                        </a>
                        <a href="mailto:aaoh@usc.edu" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope size={36} title="Email" />
                        </a>
                        <a href="https://tinyurl.com/andrew-oh-resume" target="_blank" rel="noopener noreferrer">
                            <FaFileAlt size={36} title="Resume" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
  
  export default Footer;