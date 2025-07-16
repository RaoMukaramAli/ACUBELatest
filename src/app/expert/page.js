"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./expert.module.css";
import ExpertInfo from "@/components/ExpertInfo/ExpertInfo";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .max(15, "Must be 15 digits or less"),
  linkedin: Yup.string().url("Must be a valid URL"),
  expertise: Yup.string().required("Area of knowledge is required"),
  currentRole: Yup.string(),
  experience: Yup.string()
    .min(50, "Experience should be at least 50 characters")
    .required("Experience details are required"),
});

export default function BecomeExpert() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    expertise: "",
    experience: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const res = await fetch("https://formspree.io/f/mgvwenjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          linkedin: values.linkedin,
          expertise: values.expertise,
          currentRole: values.currentRole,
          experience: values.experience,
          _subject: "New Expert Application",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Application submitted successfully!");
        resetForm();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Submission failed. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <ExpertInfo />
      <div className={`container py-5 ${styles.pageContainer}`}>
        <div className="row justify-content-center">
          <div className={`col-lg-10 ${styles.formCard}`}>
            <div className={styles.header}>
              <h2 className={styles.title}>Join Our Expert Network</h2>
              <p className={styles.subtitle}>
                Share your expertise and connect with opportunities
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={styles.form}>
                  {/* Name and Email in one row */}
                  <div className={`row ${styles.formRow}`}>
                    <div className={`col-md-6 mb-4 ${styles.formGroup}`}>
                      <label htmlFor="name" className={styles.label}>
                        Full Name <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="name"
                        className={styles.input}
                        placeholder="John Doe"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                    <div className={`col-md-6 mb-4 ${styles.formGroup}`}>
                      <label htmlFor="email" className={styles.label}>
                        Email Address <span className={styles.required}>*</span>
                      </label>
                      <Field
                        name="email"
                        type="email"
                        className={styles.input}
                        placeholder="john@example.com"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                  </div>

                  {/* Phone and LinkedIn in one row */}
                  <div className={`row ${styles.formRow}`}>
                    <div className={`col-md-6 mb-4 ${styles.formGroup}`}>
                      <label htmlFor="phone" className={styles.label}>
                        Phone Number
                        <span className={styles.helperText}>
                          {" "}
                          (For faster coordination)
                        </span>
                      </label>
                      <Field
                        name="phone"
                        type="tel"
                        className={styles.input}
                        placeholder="1234567890"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                    <div className={`col-md-6 mb-4 ${styles.formGroup}`}>
                      <label htmlFor="linkedin" className={styles.label}>
                        LinkedIn Profile
                      </label>
                      <Field
                        name="linkedin"
                        type="url"
                        className={styles.input}
                        placeholder="https://www.linkedin.com/in/yourname"
                      />
                      <ErrorMessage
                        name="linkedin"
                        component="div"
                        className={styles.error}
                      />
                    </div>
                  </div>

                  {/* Single column fields */}
                  <div className={styles.formGroup}>
                    <label htmlFor="expertise" className={styles.label}>
                      Your Area of Knowledge{" "}
                      <span className={styles.required}>*</span>
                    </label>
                    <Field
                      name="expertise"
                      className={styles.input}
                      placeholder="e.g., Digital Marketing, Healthcare IT"
                    />
                    <ErrorMessage
                      name="expertise"
                      component="div"
                      className={styles.error}
                    />
                  </div>
                  <div className={`mt-4 ${styles.formGroup}`}>
                    <label htmlFor="experience" className={styles.label}>
                      Tell Us About Your Experience{" "}
                      <span className={styles.required}>*</span>
                    </label>
                    <Field
                      as="textarea"
                      name="experience"
                      rows="5"
                      className={styles.textarea}
                      placeholder="Share your professional journey, key achievements, and expertise (minimum 50 characters)"
                    />
                    <ErrorMessage
                      name="experience"
                      component="div"
                      className={styles.error}
                    />
                  </div>

                  <div className="d-grid mt-4">
                    <button
                      type="submit"
                      className={`${styles.submitButton}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className={styles.spinner}></span> Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
