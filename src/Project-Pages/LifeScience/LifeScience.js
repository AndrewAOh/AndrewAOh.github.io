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
import ProjectPicture from "../../Pictures/Project_Cards/CAS_2025.png"
import Pic1 from "../../Pictures/Project_Pictures/life_science_entity_extraction.png"
import Pic2 from "../../Pictures/Project_Pictures/life_science_entity_metrics.png"
import Pic3 from "../../Pictures/Project_Pictures/life_science_cm.png"

function LifeScience() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Sample extraction from abstract text to embedded extractions"},
        {src: Pic2, description:"Metrics for each life science entity"},
        {src: Pic3, description:"Confusion Matrix for each life science entity"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Leveraging GenAI to Extract Life Science Entities
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
                    <p>This project focused on improving the extraction of life science entities from unstructured biomedical research abstracts using large language models (LLMs). The goal was to accurately identify and label domain-specific entities—such as <strong>genes, proteins, chemicals, cell lines, tissues, and species</strong>—from scientific text, enabling faster downstream analysis and reducing manual annotation effort for researchers.</p>
                    <p>To accomplish this, I designed an end-to-end GenAI-powered named entity recognition (NER) pipeline and iteratively optimized it through <strong>model benchmarking, prompt engineering, retrieval-augmented generation (RAG), and rigorous evaluation</strong>. The final system processed over <strong>14,000 research abstracts</strong> and achieved a <strong>78.1% F1-score</strong>, representing a substantial improvement over baseline performance.</p>

                    
                    <p>
                        <h3 className="Project-Header">Problem Definition & Baseline Evaluation</h3>
                        I began by evaluating the baseline performance of several state-of-the-art foundation models for life science entity extraction. Using a zero-shot prompting approach, I compared models across accuracy, recall, and inference speed to identify the most practical starting point:
                        <ul>
                            <li><strong>Claude 4 Sonnet</strong> achieved an initial <strong>28.8% F1-score</strong>, offering the best balance of speed and accuracy.</li>
                            <li><strong>Claude 4 Opus</strong> showed slightly higher accuracy (31.8% F1) but was ~3× slower.</li>
                            <li><strong>Meta Llama 3.3 Instruct</strong> was ~2× faster but significantly underperformed (11.3% F1).</li>
                            <li>Other Claude variants showed worse performance with no meaningful speed gains.</li>
                        </ul>
                        Based on these results, I selected <strong>Claude 4 Sonnet</strong> as the primary model for optimization.
                    </p>

                    
                    <p> 
                        <h3 className="Project-Header">Prompt Engineering & Output Design</h3>
                        The largest performance gains came from carefully redesigning how the model was instructed and how it produced outputs.
                    </p>
                    <p>I first introduced few-shot prompt engineering, progressively increasing the number and diversity of examples. This improved the model’s understanding of both entity boundaries and labeling conventions.</p>
                    <p>While recall improved, performance plateaued due to unreliable character-index predictions. The model frequently misaligned start and end indices, which severely penalized evaluation metrics.</p>
                    <p>To address this, I replaced <strong>index-based JSON outputs with an embedded entity format</strong>, where entities were directly tagged within the text. This structural change dramatically improved reliability and interpretability</p>
                    <p>This single design decision increased the F1-score from <strong>36.4% to 64.3%</strong>, while entity-level recall jumped above 92%. It also simplified post-processing and reduced ambiguity in downstream evaluation.</p>
                    <p>I then refined <strong>in-prompt entity definitions</strong> to ensure consistency between how entities were described and how they appeared in real biomedical text. Aligning model instructions with domain-specific usage further increased performance to <strong>76.3% F1</strong>, demonstrating the importance of domain understanding in LLM-driven extraction tasks.</p>

                    <p>
                        <h3 className="Project-Header">Retrieval-Augmented Generation (RAG)</h3>
                        To push performance further, I integrated <strong>RAG using AWS Bedrock Knowledge Bases</strong>. I curated a domain-specific corpus derived from John Snow Labs NER datasets, stored in S3 and consisting of 14,220 annotated research abstracts.
                    </p>
                    <p>By injecting relevant biomedical context at inference time, the model gained stronger grounding in life science terminology and entity relationships. This resulted in the project’s best overall performance:
                        <ul>
                            <li><strong>F1-Score:</strong> 78.1%</li>
                            <li><strong>Recall:</strong> 80.2%</li>
                            <li><strong>Entity Recall:</strong> 91.4%</li>
                        </ul>
                    </p>

                    
                    <p>
                        <h3 className="Project-Header">Evaluation, Analysis, and Visualization</h3>
                        To rigorously compare models and prompting strategies, I built a custom evaluation pipeline using <strong>nervaluate</strong>, enabling schema-aware precision, recall, and F1 computation across multiple entity types. This allowed me to generate confusion matrices by entity category, identify systematic failure modes (e.g., gene vs. protein confusion), and analyze trade-offs between recall and precision.
                    </p>
                    <p>To support model inspection and stakeholder demos, I developed a Streamlit application that allows side-by-side comparison of predictions and ground truth with interactive visualizations.</p>
                    <p>Beyond the technical work, I also created a <strong>company-wide poster presentation</strong> explaining how GenAI can accelerate internal document processing workflows. This presentation was delivered to both technical and non-technical audiences, translating complex ML concepts into actionable business value and helping shape broader GenAI adoption strategy.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default LifeScience;