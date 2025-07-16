import EducationProgramsLayout from "@/components/EducationProgramsLayout/EducationProgramsLayout";
import { itServicedata } from "@/lib/data/itServicedata";
import React from "react";

export const metadata = {
  title: " ACUBE Research Network  ",
  description: "",
};
const itServices = () => {
  return (
    <div className="wrapper">
      <EducationProgramsLayout
        title={itServicedata.title}
        description={itServicedata.description}
        imageUrl={itServicedata.imageUrl}
        list={itServicedata.list}
      />
    </div>
  );
};

export default itServices;
