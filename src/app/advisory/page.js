import EducationProgramsLayout from "@/components/EducationProgramsLayout/EducationProgramsLayout";
import { foodProgram } from "@/lib/data/foodProgram";
import React from "react";

export const metadata = {
  title: "Advisory | ACUBE Research Network  ",
  description:
    "Whether you need a speaker for an event, support in developing tailored learning and development programs, or assistance with board placements and deal advisory services, we connect you with the right industry leaders or C-suite professionals. Our network ensures you have access to the expertise and insights needed to drive impactful outcomes. Let us help you find the perfect fit to achieve your goals.",
};
const Advisory = () => {
  return (
    <div className="wrapper">
      <EducationProgramsLayout
        title={foodProgram.title}
        description={foodProgram.description}
        imageUrl={foodProgram.imageUrl}
        list={foodProgram.list}
      />
    </div>
  );
};

export default Advisory;
