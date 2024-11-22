import Whatwe from "@/components/Home/WhatWe/Whatwe";
import ShapesSection from "@/components/Home/ShapesSection/ShapesSection";
import Hero from "@/components/Home/Hero/Hero";
import WorkSteps from "@/components/Home/SocialDevelopment/WorkSteps";
import Value from "@/components/Home/OurStory/Value";
import Testimonials from "@/components/Home/Scholars/Testimonials";

export const metadata = {
  title: "Home | ACUBE Research Network",
  description:
    "The ACUBE Research Network Trust (ABT) is an independent, non-political, charitable institution founded by Farah Deeba Akram in 2005 with the mission to serve the less privileged  by providing education, food, and health facilities and empower them to break the vicious cycle of poverty through integrated educational, ethical and social development",
};
export default function Home() {
  return (
    <main>
      <div className="wrapper">
        <Hero />
        <ShapesSection />
        <Whatwe />
        <WorkSteps />
        <Value />
        <Testimonials />
      </div>
    </main>
  );
}
