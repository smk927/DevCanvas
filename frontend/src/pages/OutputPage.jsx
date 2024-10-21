import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import {
  propertiesPlugin,
  RenderShowPropertiesProps,
} from "@react-pdf-viewer/properties";
import "../styles/output.css";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import InfoIcon from "@mui/icons-material/Info";
import DownloadIcon from "@mui/icons-material/Download";

const Output = () => {
  const { docType, docId } = useParams();
  const [fileUrl, setFileUrl] = useState("/Class_Diagram_Report.pdf");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const getFilePluginInstance = getFilePlugin();
  const propertiesPluginInstance = propertiesPlugin();
  const { Download } = getFilePluginInstance;
  const { ShowProperties } = propertiesPluginInstance;

  const handleStarClick = (index) => {
    if (index === rating) {
      setRating(0);
    } else {
      setRating(index);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  useEffect(() => {
    // const fetchFile = async () => {
    //   try {
    //     const response = await fetch(
    //       `http://127.0.0.1:8000/uploadmate/download/${docId}/`
    //     );
    //     const data = await response.json();
    //     if (response.ok) {
    //       setFileUrl(data.file_url);
    //     } else {
    //       console.error("Failed to fetch file:", data);
    //       alert("Failed to fetch file");
    //     }
    //   } catch (error) {
    //     alert("Error fetching file");
    //     console.error("Error fetching file:", error);
    //   }
    // };
    // fetchFile();
    console.log("File URL:", fileUrl);
  }, [docId]);

  return (
    <div className="output-container">
      <h2>
        <span>Success.</span> Your Documentation is Ready!
      </h2>
      <hr className="divider" />
      {fileUrl ? (
        <>
          <div className="pdf-viewer">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
              <div className="toolbar">
                <div className="toolbar-icon">
                  <ShowProperties>
                    {(props) => (
                      <button
                        className="btn"
                        onClick={props.onClick}
                        title="Show Properties"
                      >
                        <InfoIcon className="toolbar-icons" />
                      </button>
                    )}
                  </ShowProperties>
                </div>
                <div className="toolbar-icon">
                  <Download>
                    {(props) => (
                      <button
                        className="btn"
                        onClick={props.onClick}
                        title="Download file"
                      >
                        <DownloadIcon className="toolbar-icons" />
                      </button>
                    )}
                  </Download>
                </div>
              </div>
              <div className="viewer-container">
                <Viewer
                  fileUrl={fileUrl}
                  plugins={[getFilePluginInstance, propertiesPluginInstance]}
                />
              </div>
            </Worker>
            <div className="feedback-container">
              <h3>
                Enjoyed the experience? We'd love to hear{" "}
                <span> your feedback</span> - it means a lot to us!
              </h3>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) =>
                  star <= rating ? (
                    <StarRoundedIcon
                      className="star-icons"
                      key={star}
                      onClick={() => handleStarClick(star)}
                    />
                  ) : (
                    <StarBorderRoundedIcon
                      key={star}
                      className="star-icons"
                      onClick={() => handleStarClick(star)}
                    />
                  )
                )}
              </div>
              {rating > 0 && (
                <button className="btn" onClick={handleSubmit}>
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Output;