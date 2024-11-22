// pages/contact.js
import Head from "next/head";
import styles from "./contactus.module.css";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-qWEwqkCmZLvTHcl1EIE2NQ/Pr+0PtTIGzF8nI/6QcWo6OsB4pfjOTklOulcREACo"
          crossOrigin="anonymous"
        />
      </Head>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="pt-5 display-5 fw-bold text-dark">Contact Us</h2>
          </div>

          <div className="row justify-content-center mt-5">
            {/* <div className="col-md-4 text-center">
              <div className="card p-4">
                <div className="mb-4 text-primary">
                  <i className="bi bi-telephone-fill fs-1"></i>
                </div>
                <p className="mb-2 fw-medium text-dark">+1-316-555-0116</p>
                <p className="fw-medium text-dark">+1-446-526-0117</p>
              </div>
            </div> */}

            <div className="col-md-4 text-center">
              <div className="card p-4">
                <div className="mb-4 text-primary">
                  <i className="bi bi-envelope-fill fs-1"></i>
                </div>
                <h2>Email</h2>
                <p className="mb-2 fw-medium text-dark">
                  teams@acuberesearchnetwork.com
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="card p-4">
                <div className="mb-4 text-primary">
                  <i className="bi bi-geo-alt-fill fs-1"></i>
                </div>
                <h2>Address</h2>
                <p className="mb-2 fw-medium text-dark">
                  6 Gordon Street, Burton-on-Trent, UK
                </p>
              </div>
            </div>
          </div>

          <div className="card mt-5">
            <div className="card-body py-5 px-4">
              <h3 className="text-center mb-5">Send Us a Message</h3>
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="company" className="form-label">
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center mt-4">
                    <button className={`btn ${styles.navBtn}`} type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
