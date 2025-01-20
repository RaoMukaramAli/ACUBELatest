import Whatwe from "@/components/Home/WhatWe/Whatwe";
import ShapesSection from "@/components/Home/ShapesSection/ShapesSection";
import Hero from "@/components/Home/Hero/Hero";
import WorkSteps from "@/components/Home/SocialDevelopment/WorkSteps";
import Value from "@/components/Home/OurStory/Value";
import Testimonials from "@/components/Home/Scholars/Testimonials";

export const metadata = {
  title: "Home | ACUBE Research Network",
  description:
    "The ACUBE Research Network "};
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
