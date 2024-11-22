"use client";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center">
          <h2 className="text-dark">
            <span className="border-bottom border-warning pb-1">
              What our Clients say about ACUBE
            </span>
          </h2>
        </div>
        <div className="row text-center mt-5">
          {/* Testimonial 1 */}
          <div className="col-md-6 mb-4">
            <div className="d-flex justify-content-center mb-3">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="bi bi-star-fill text-warning mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-3">
              <p className="text-secondary">
                We have been thoroughly impressed with ACUBE&apos;s ability to
                connect us with industry specialists who have provided detailed
                and actionable advice. Their transparent pricing and efficient
                process made it easy for us to get the expertise we needed
                quickly. ACUBE has become our go-to resource for expert
                consultations.
              </p>
              <div className="text-center">
                <h3 className="text-dark">
                  <span className="border-bottom border-warning pb-1">
                    Priya Mehta
                  </span>
                </h3>
              </div>
            </blockquote>
          </div>

          {/* Testimonial 2 */}
          <div className="col-md-6 mb-4">
            <div className="d-flex justify-content-center mb-3">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="bi bi-star-fill text-warning mx-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-3">
              <p className="text-secondary">
                “ACube has been an invaluable partner for our market research
                needs.Their extensive network of experts provided us with
                crucial insights that significantly impacted our strategic
                decisions. The team is professional, responsive and dedicated to
                delivering high quality services.Highly recommended!”
              </p>
              <div className="text-center">
                <h3 className="text-dark">
                  <span className="border-bottom border-warning pb-1">
                    Andrew Smith
                  </span>
                </h3>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
