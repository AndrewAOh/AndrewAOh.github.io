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
import ProjectPicture from "../../Pictures/Project_Cards/CAS-project.png"
import Pic1 from "../../Pictures/Project_Pictures/CAS2.png"
import Pic2 from "../../Pictures/Project_Pictures/CAS3.png"
import Pic3 from "../../Pictures/Project_Pictures/CAS1.png"
import Pic4 from "../../Pictures/Project_Pictures/CAS4.png"
import Pic5 from "../../Pictures/Project_Pictures/CAS5.png"
import Pic6 from "../../Pictures/Project_Pictures/CAS6.png"

function ChemicalReaction() {
    const [color, changeColor] = useState("#ffffff");
    document.body.style.backgroundColor = color;

    const [open, setOpen] = React.useState(false);
    const gallerySlides = [
        {src: Pic1, description:"Final model results"},
        {src: Pic2, description:"Overall model performance compared to ACS model"},
        {src: Pic3, description:"Dataset analysis"},
        {src: Pic4, description:"Dataset creation process"},
        {src: Pic5, description:"Chemical reaction role classifying definitions"},
        {src: Pic6, description:"Baseline ACS model"},
    ];

    return (
        <div className="Project-Page">
            <h1 className="Project-Title"> 
                Chemical Reaction Component Recognition
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
                    <p>This data science project aimed to enhance the efficiency of scientists in processing chemical research documents by improving reaction role identification. Building on the ACS model published by MIT researchers, the project focused on the "experiential section" of chemical research journals, seeking to achieve a high recall rate and improve upon the ACS model's performance.</p>

                    <p>The project involved annotating a dataset of published chemical journals using the brat annotation tool. Reaction roles were identified based on classifications outlined in the ACS paper. Collaboration with another department within the company allowed for the curation of a high-quality, extensive dataset, leveraging their previously annotated data for accuracy.</p>

                    <p>I initially fine-tuned a pre-trained model on a custom dataset of chemical literature to adapt the model to the specific language and context of chemical reactions. This process involved taking BERT (a general-purpose language model which had already been trained on vast amounts of text data) and then further training it on a specialized corpus of chemical research papers. By fine-tuning the model with this domain-specific data, I ensured that it became proficient at understanding the terminology, syntax, and context particular to chemical reactions, such as reaction types, reagents, and reaction conditions.</p>

                    <p>After fine-tuning the model on chemical literature, I developed a Masked Language Model (MLM) using the pre-trained and fine-tuned model. An MLM is a transformer-based neural network that predicts masked tokens in text using surrounding context. This approach enabled the model to capture deep contextual relationships between chemical terms and concepts, improving its understanding of chemical reactions.</p>

                    <p>Leveraging the self-attention mechanism in Transformers, the model effectively identified key components such as reactants, products, catalysts, and solvents based on context. The fine-tuned model, specialized for chemical literature, enabled accurate extraction of chemical reaction components from research papers, significantly enhancing both the efficiency and accuracy of data analysis.</p>

                    <p>Using a "relaxed match" approach, the results showed a significant improvement over the ACS model, achieving recall rates exceeding 90% for most reaction roles. This means that the model can identify a relevant reaction component from the literature over 90% of the time, effectively augmenting the company's scientists by reducing the time spent analyzing individual research papers. The key takeaway from the project is that the enhanced model enables the company’s scientists to process documents more efficiently, saving time and streamlining their research workflow.</p>
                </div>
            </div>
        </div>
      
    );
  }
  
  export default ChemicalReaction;