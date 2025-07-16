"use client"; // Required for Calendly component

import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Head from "next/head";
import { InlineWidget } from "react-calendly";
import "bootstrap/dist/css/bootstrap.min.css";

const ExpertPage = () => {
  return (
    <>
      <Head>
        <title>Expert Consultation | Our Platform</title>
        <meta name="description" content="Book a session with our experts" />
      </Head>
        <Card className="shadow-sm">
          <Card.Body>
            <div style={{ minHeight: "800px", width: "100%" }}>
              <InlineWidget
                url="https://calendly.com/team-acuberesearchnetwork/acube-research-network"
                styles={{
                  height: "800px",
                  width: "100%",
                }}
                pageSettings={{
                  backgroundColor: "ffffff",
                  hideEventTypeDetails: false,
                  hideGdprBanner: true,
                  primaryColor: "00a2ff",
                  textColor: "4d5055",
                }}
              />
            </div>
          </Card.Body>
        </Card>
    </>
  );
};

export default ExpertPage;
