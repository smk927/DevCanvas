import React from "react";
import "../styles/extraPages.css";
import Footer from "../components/Footer.jsx";
import intro from "/intropic.png";

const Services = () => {
  return (
    <section>
      <div className="page-container services">
        <h1 className="main-heading">Our Services</h1>
        <hr className="divider" />
        <div className="img-container">
          <div className="flex-content">
            <div>
              <h2>Automated Documentation Generation</h2>
              <p>
                Generate detailed, accurate documentation directly from your
                source code. Our tool supports various programming languages and
                creates clear, comprehensive docs that evolve with your
                codebase.
              </p>
            </div>
            <div>
              <h2>Real-Time Sync</h2>
              <p>
                Enjoy seamless synchronization that keeps your documentation
                aligned with every change in your code, reducing the hassle of
                manual updates.
              </p>
            </div>
            <div>
              <h2>Customizable Documentation Output</h2>
              <p>
                Tailor the documentation to meet your project’s needs. Choose
                from different templates, formats, and organization styles to
                create the most suitable documentation for your team and
                stakeholders.
              </p>
            </div>
            <div>
              <h2>Collaborative Tools</h2>
              <p>
                Enable team members and stakeholders to collaborate efficiently
                with shared access to up-to-date documentation, annotations, and
                revision history.
              </p>
            </div>
          </div>
          <img src={intro} alt="Graphic Image" />
        </div>
        <hr className="divider" />
      </div>
      <Footer />
    </section>
  );
};

export default Services;
