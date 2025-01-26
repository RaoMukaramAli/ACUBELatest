import Whatwe from "@/components/Home/WhatWe/Whatwe";
import ShapesSection from "@/components/Home/ShapesSection/ShapesSection";
import Hero from "@/components/Home/Hero/Hero";
import WorkSteps from "@/components/Home/SocialDevelopment/WorkSteps";
import Value from "@/components/Home/OurStory/Value";
import Testimonials from "@/components/Home/Scholars/Testimonials";

export const metadata = {
  title: "Home | ACUBE Research Network",
  description:
    "ACUBE Research Network is a market research and business consulting firm. that offers a broad range of services to clients across various industries. The company's mission is to deliver high-quality research and consulting services that help clients achieve their business objectives.",
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
