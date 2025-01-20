import EducationProgramsLayout from "@/components/EducationProgramsLayout/EducationProgramsLayout";
import { healthCareProgram } from "@/lib/data/healthCareProgram";
import React from "react";

export const metadata = {
  title: " ACUBE Research Network  ",
  description:
    "",
};
const Surveys = () => {
  return (
    <div className="wrapper">
      <EducationProgramsLayout
        title={healthCareProgram.title}
        description={healthCareProgram.description}
        imageUrl={healthCareProgram.imageUrl}
        list={healthCareProgram.list}
      />
    </div>
  );
};

export default Surveys;
