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
import ProjectPicture from "../../Pictures/Project_Cards/CineScore.png"
import Pic1 from "../../Pictures/Project_Pictures/cinescore_ranking.png"
import Pic2 from "../../Pictures/Project_Pictures/review_sentiment_example.png"

function CineScore() {
    const [color] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"CineScore Re-Ranked Top 250 Movies Based On Their Reviews"},
        {src: Pic2, description:"Sample CineScore Sentiment Scoring of a Movie Review"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                CineScore: Analyzing the True Sentiment of Movie Reviews
            </h1>

            <div className="Title-Divider"></div>

            <div className="Project-Content">
                <div className="Picture-Side-Container">
                    <div className="Picture-Container">
                        <img className="Project-Picture" src={ProjectPicture} alt="Project Card"></img>
                    </div>
                    <div className="Link-Gallery-Container">
                        <div className="Link-Container">
                            <button 
                                className="Link-Button" 
                                onClick={() => window.open("https://movie-cinescore.streamlit.app/", "_blank")}
                                style={{cursor: 'pointer'}}
                            >
                                Link
                            </button>
                        </div>
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
                    <p> CineScore is a natural language processing project that re-ranks IMDb’s Top 250 movies using <strong>review text alone</strong>, removing reliance on numerical ratings. Traditional rating systems compress rich audience opinions into a single number, masking nuance and introducing bias due to inconsistent user interpretation of rating scales. CineScore instead derives rankings directly from what viewers say, producing a more interpretable and text-grounded measure of movie quality. </p>

                    <p>
                        <h3 className="Project-Header">Problem Motivation</h3>
                        IMDb’s Top 250 ranking aggregates millions of user ratings into a weighted numerical score per film. While effective at scale, this approach discards the semantic depth of written reviews—where sentiment intensity, contextual praise or criticism, and mixed opinions are expressed more clearly than through stars alone.
                    </p>
                    <p>For example, two users may both assign a 7/10 rating while expressing vastly different sentiments in text. CineScore addresses this limitation by treating each <strong>written review as an independent sentiment signal</strong>, allowing rankings to be driven by language rather than numeric shortcuts.</p>

                    <p>
                        <h3 className="Project-Header">Data Collection & Processing</h3>
                        I scraped and processed IMDb’s Top 250 movie pages, collecting over 370,000 user reviews. Each review was cleaned, normalized, and stored in a structured dataset aligned to its corresponding film. This dataset formed the foundation for model training, evaluation, and large-scale inference.
                    </p>

                    <p>
                        <h3 className="Project-Header">Model & Methodology</h3>
                        At the core of CineScore is a <strong>RoBERTa-based sentiment analysis model</strong> fine-tuned specifically for movie reviews. Domain adaptation was essential to accurately capture film-specific language, sarcasm, mixed sentiment, and nuanced critique common in audience feedback.
                    </p>
                    <p>The model outputs a probability distribution over ordered sentiment classes for each review. These probabilities are transformed into a <strong>continuous sentiment score</strong>, enabling fine-grained comparison across reviews. Review-level scores are then aggregated at the movie level to compute a final CineScore, which serves as the basis for re-ranking.</p>
                    <p>The fine-tuned model achieved <strong>95% accuracy</strong>, providing reliable sentiment inference across a wide range of writing styles and opinions.</p>

                    <p>
                        <h3 className="Project-Header">Results & Impact</h3>
                        Using CineScore, I re-ranked IMDb’s Top 250 movies based solely on inferred sentiment from text. This approach:
                        <ul>
                            <li>Corrected for inconsistencies in user rating behavior</li>
                            <li>Elevated films with consistently strong written praise</li>
                            <li>De-emphasized movies with inflated ratings but mixed textual sentiment</li>
                        </ul>
                        The result is a ranking that better reflects <strong>collective audience opinion</strong> as expressed in natural language, improving recommendation quality and interpretability.
                    </p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default CineScore;