import React from "react";
import styles from "./WorkSteps.module.css";

const WorkSteps = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "600px" }}>
          <h2 className="fw-bold display-5">How does it work?</h2>
          <p className="text-muted mt-3">
            Our process is designed to be simple, efficient, and transparent.
            Here’s how you can get started and achieve your goals effortlessly
          </p>
        </div>

        {/* Steps */}
        <div className="position-relative">
          <div
            className="position-absolute d-none d-md-block w-100"
            style={{ top: "10px" }}
          ></div>

          <div className="row text-center g-4">
            {/* Step 1 */}
            <div className="col-md-4">
              <div
                className={`d-flex justify-content-center align-items-center border border-light rounded-circle shadow ${styles.stepCircle}`}
                style={{ width: "64px", height: "64px", margin: "0 auto" }}
              >
                <span className="fw-bold text-muted ">1</span>
              </div>
              <h3 className="fw-semibold mt-4">Submit a project</h3>
              <p className="text-muted mt-3">
                Submit a project request with the requirments of what you are
                looking for your project.
              </p>
            </div>

            {/* Step 2 */}
            <div className="col-md-4">
              <div
                className={`d-flex justify-content-center align-items-center border border-light rounded-circle shadow ${styles.stepCircle}`}
                style={{ width: "64px", height: "64px", margin: "0 auto" }}
              >
                <span className="fw-bold text-muted">2</span>
              </div>
              <h3 className="fw-semibold mt-4">Sourcing</h3>
              <p className="text-muted mt-3">
                ACUBE team will source and screen relevent experts from inside
                and outside of our expert network.
              </p>
            </div>

            {/* Step 3 */}
            <div className="col-md-4">
              <div
                className={`d-flex justify-content-center align-items-center border border-light rounded-circle shadow ${styles.stepCircle}`}
                style={{ width: "64px", height: "64px", margin: "0 auto" }}
              >
                <span className="fw-bold text-muted">3</span>
              </div>
              <h3 className="fw-semibold mt-4">Expert Profile</h3>
              <p className="text-muted mt-3">
                You will be provided with a profile of the relevant experts for
                you to choose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
