import React from "react";
import styles from "./ShapesSection.module.css";
import Card from "./Card";

const ShapesSection = ({ data }) => {
  return (
    <section class="py-5 bg-white">
      <div class="container">
        <div class="text-center">
          <h2 class="mt-3 fw-bold text-dark">
            Data-Driven Insights from the Past Five Years
          </h2>
        </div>
        <div class="row g-4 mt-4 mt-lg-5">
          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card border-light shadow-sm">
              <div class={`card-body text-center ${styles.cardBody}`}>
                <h1 class="mt-3 fw-bold text-dark">5+</h1>
                <p class="mt-2 text-muted">Years in business</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card border-light shadow-sm">
              <div class={`card-body text-center ${styles.cardBody}`}>
                <h1 class="mt-3 fw-bold text-dark">200+</h1>
                <p class="mt-2 text-muted">Number of Clients</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card border-light shadow-sm">
              <div class={`card-body text-center ${styles.cardBody}`}>
                <h1 class="mt-3 fw-bold text-dark">3,274</h1>
                <p class="mt-2 text-muted">Projects delivered</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-sm-6 col-lg-3">
            <div class="card border-light shadow-sm">
              <div class={`card-body text-center ${styles.cardBody}`}>
                <h1 class="mt-3 fw-bold text-dark">10,000+</h1>
                <p class="mt-2 text-muted">Experts In Our Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapesSection;
